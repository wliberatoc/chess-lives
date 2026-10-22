import './status-badge.css';

type StatusBadgeProps = {
	isLive: boolean;
};

export function StatusBadge({ isLive }: StatusBadgeProps) {
	if (!isLive) {
		return null;
	}

	return (
		<span className="status" aria-label="Ao vivo" title="Ao vivo">
			<span className="status-dot" aria-hidden="true" />
			<span className="sr-only">Ao vivo</span>
		</span>
	);
}
