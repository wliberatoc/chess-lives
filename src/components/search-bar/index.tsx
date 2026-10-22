import { SearchIcon } from '../icons';
import './search-bar.css';

type SearchBarProps = {
	value: string;
	onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
	return (
		<label className="search-bar">
			<span className="sr-only">Buscar streamer pelo nome</span>
			<SearchIcon className="search-icon" />
			<input
				type="search"
				value={value}
				onChange={(event) => onChange(event.target.value)}
				placeholder="Buscar streamer..."
				autoComplete="off"
			/>
		</label>
	);
}
