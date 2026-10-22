import { StreamerCard } from '../streamer-card';
import type { Streamer } from '../../types/streamer';
import './streamer-grid.css';

type StreamerGridProps = {
	streamers: Streamer[];
};

export function StreamerGrid({ streamers }: StreamerGridProps) {
	return (
		<section aria-labelledby="catalog-title">
			<div className="grid-heading">
				<div>
					<p className="section-tag">Catálogo</p>
					<h2 id="catalog-title">Canais para acompanhar</h2>
				</div>
				<p className="result-count">{streamers.length} streamers</p>
			</div>

			<div className="stream-grid">
				{streamers.map((streamer) => (
					<StreamerCard key={streamer.username} streamer={streamer} />
				))}
			</div>
		</section>
	);
}
