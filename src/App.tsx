import { useMemo, useState } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Pagination } from './components/pagination';
import { StreamerGrid } from './components/streamer-grid';
import { useStreamers } from './hooks/use-streamers';
import './App.css';

const ITEMS_PER_PAGE = 12;

export default function App() {
	const { streamers, isLoading, error, refresh } = useStreamers();
	const [currentPage, setCurrentPage] = useState<number>(1);
	const totalPages = Math.max(1, Math.ceil(streamers.length / ITEMS_PER_PAGE));
	const activePage = Math.min(currentPage, totalPages);
	const visibleStreamers = useMemo(() => {
		const firstItem = (activePage - 1) * ITEMS_PER_PAGE;
		return streamers.slice(firstItem, firstItem + ITEMS_PER_PAGE);
	}, [activePage, streamers]);

	function handlePageChange(page: number) {
		setCurrentPage(page);
		document.getElementById('catalogo')?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}

	return (
		<div className="app">
			<Header isRefreshing={isLoading} onRefresh={refresh} />

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
							totalCount={streamers.length}
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
