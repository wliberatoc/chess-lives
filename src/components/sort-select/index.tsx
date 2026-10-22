import type { ChangeEvent } from 'react';
import type { SortOption } from '../../types/sort-option';
import './sort-select.css';

type SortSelectProps = {
	value: SortOption;
	onChange: (value: SortOption) => void;
};

export function SortSelect({ value, onChange }: SortSelectProps) {
	function handleChange(event: ChangeEvent<HTMLSelectElement>) {
		onChange(event.target.value as SortOption);
	}

	return (
		<label className="sort-field">
			<span>Ordenar por</span>
			<select className="sort-select" value={value} onChange={handleChange}>
				<option value="live">Ao vivo primeiro</option>
				<option value="name-asc">Nome: A–Z</option>
				<option value="name-desc">Nome: Z–A</option>
			</select>
		</label>
	);
}
