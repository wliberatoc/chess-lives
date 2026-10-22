import { ChevronIcon } from '../icons';
import './pagination.css';

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
	if (totalPages <= 1) {
		return null;
	}

	return (
		<nav className="pagination" aria-label="Paginação do catálogo">
			<button
				className="page-btn"
				type="button"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<ChevronIcon className="page-icon page-icon-prev" />
				Anterior
			</button>

			<p className="page-info" aria-live="polite">
				Página <strong>{currentPage}</strong> de {totalPages}
			</p>

			<button
				className="page-btn"
				type="button"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Próxima
				<ChevronIcon className="page-icon" />
			</button>
		</nav>
	);
}
