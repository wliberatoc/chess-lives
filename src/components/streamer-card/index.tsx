import { StreamIcon } from '../icons';
import { StatusBadge } from '../status-badge';
import type { Streamer } from '../../types/streamer';
import './streamer-card.css';

type StreamerCardProps = {
	streamer: Streamer;
};

export function StreamerCard({ streamer }: StreamerCardProps) {
	return (
		<article className="stream-card">
			<StatusBadge isLive={streamer.is_live} />

			<img
				className="avatar"
				src={streamer.avatar}
				alt={`Avatar de ${streamer.username}`}
				width="96"
				height="96"
				loading="lazy"
			/>

			<div className="card-copy">
				<p className="live-label">{streamer.is_live ? 'Transmitindo agora' : 'Canal offline'}</p>
				<h2 title={streamer.username}>{streamer.username}</h2>
			</div>

			<a
				className="live-link"
				href={streamer.twitch_url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`Ir para a live de ${streamer.username} na Twitch`}
			>
				<StreamIcon className="link-icon" />
				Ir para a live
			</a>
		</article>
	);
}
