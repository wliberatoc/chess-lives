type IconProps = {
	className?: string;
};

export function ChessIcon({ className }: IconProps) {
	return (
		<svg className={className} viewBox="0 0 48 48" aria-hidden="true">
			<path d="M31.7 7.2c-5.2.8-9.3 3.6-12.5 8.6l-4.4 6.8 7.3 4.2-6.3 7.5h22c-.8-7-4.4-11.7-10.7-14.3l4.6-2.7 3.6 3.7 3-2.8-6.6-11Z" />
			<path d="M13 37h27v5H10.5c0-2.8.9-4.5 2.5-5Z" />
			<circle cx="27.8" cy="13.2" r="1.8" className="icon-eye" />
		</svg>
	);
}

export function StreamIcon({ className }: IconProps) {
	return (
		<svg className={className} viewBox="0 0 24 24" aria-hidden="true">
			<path d="M8 5.5v13l10-6.5L8 5.5Z" />
		</svg>
	);
}
