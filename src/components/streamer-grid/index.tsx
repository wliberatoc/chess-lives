import { StreamerCard } from '../streamer-card';
import { SortSelect } from '../sort-select';
import type { Streamer } from '../../types/streamer';
import type { SortOption } from '../../types/sort-option';
import './streamer-grid.css';

type StreamerGridProps = {
	streamers: Streamer[];
	totalCount: number;
	sortOption: SortOption;
	onSortChange: (value: SortOption) => void;
};

export function StreamerGrid({
	streamers,
	totalCount,
	sortOption,
	onSortChange,
}: StreamerGridProps) {
	const resultLabel = totalCount === 1 ? 'streamer' : 'streamers';

	return (
		<section aria-labelledby="catalog-title">
			<div className="grid-heading">
				<div>
					<p className="section-tag">Catálogo</p>
					<h2 id="catalog-title">Canais para acompanhar</h2>
				</div>
				<div className="grid-actions">
					<SortSelect value={sortOption} onChange={onSortChange} />
					<p className="result-count">{totalCount} {resultLabel}</p>
				</div>
			</div>

			{streamers.length > 0 ? (
				<div className="stream-grid">
					{streamers.map((streamer) => (
						<StreamerCard key={streamer.username} streamer={streamer} />
					))}
				</div>
			) : (
				<p className="grid-empty">Nenhum streamer corresponde à sua busca.</p>
			)}
		</section>
	);
}
