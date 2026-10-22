import { useMemo, useState } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Pagination } from './components/pagination';
import { StreamerGrid } from './components/streamer-grid';
import { useStreamers } from './hooks/use-streamers';
import type { SortOption } from './types/sort-option';
import './App.css';

const ITEMS_PER_PAGE = 12;

export default function App() {
	const { streamers, isLoading, error, refresh } = useStreamers();
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [sortOption, setSortOption] = useState<SortOption>('live');
	const filteredStreamers = useMemo(() => {
		const normalizedSearch = searchTerm.trim().toLocaleLowerCase('pt-BR');
		const filtered = streamers.filter((streamer) =>
			streamer.username.toLocaleLowerCase('pt-BR').includes(normalizedSearch),
		);

		return filtered.toSorted((first, second) => {
			if (sortOption === 'live') {
				return Number(second.is_live) - Number(first.is_live);
			}

			const comparison = first.username.localeCompare(second.username, 'pt-BR');
			return sortOption === 'name-asc' ? comparison : -comparison;
		});
	}, [searchTerm, sortOption, streamers]);
	const totalPages = Math.max(1, Math.ceil(filteredStreamers.length / ITEMS_PER_PAGE));
	const activePage = Math.min(currentPage, totalPages);
	const visibleStreamers = useMemo(() => {
		const firstItem = (activePage - 1) * ITEMS_PER_PAGE;
		return filteredStreamers.slice(firstItem, firstItem + ITEMS_PER_PAGE);
	}, [activePage, filteredStreamers]);

	function handleSearchChange(value: string) {
		setSearchTerm(value);
		setCurrentPage(1);
	}

	function handleSortChange(value: SortOption) {
		setSortOption(value);
		setCurrentPage(1);
	}

	function handlePageChange(page: number) {
		setCurrentPage(page);
		document.getElementById('catalogo')?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}

	return (
		<div className="app">
			<Header
				isRefreshing={isLoading}
				onRefresh={refresh}
				searchTerm={searchTerm}
				onSearchChange={handleSearchChange}
			/>

			<main className="content" id="catalogo">
				{isLoading && streamers.length === 0 && (
					<p className="notice" aria-live="polite">Carregando streamers...</p>
				)}
				{error && <p className="notice notice-error" role="alert">{error}</p>}
				{!isLoading && !error && streamers.length === 0 && (
					<p className="notice">Nenhum streamer foi encontrado.</p>
				)}

				{streamers.length > 0 && (
					<>
						<StreamerGrid
							streamers={visibleStreamers}
							totalCount={filteredStreamers.length}
							sortOption={sortOption}
							onSortChange={handleSortChange}
						/>
						<Pagination
							currentPage={activePage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
						/>
					</>
				)}
			</main>

			<Footer />
		</div>
	);
}
