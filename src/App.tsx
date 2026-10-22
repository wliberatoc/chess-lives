import { useEffect, useState } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { StreamerGrid } from './components/streamer-grid';
import { fetchStreamers } from './services/chess-api';
import type { Streamer } from './types/streamer';
import './App.css';

export default function App() {
	const [streamers, setStreamers] = useState<Streamer[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		async function loadStreamers() {
			try {
				setIsLoading(true);
				setError(null);

				const data = await fetchStreamers(controller.signal);
				setStreamers(data);
			} catch (requestError) {
				if (requestError instanceof Error && requestError.name === 'AbortError') {
					return;
				}

				setError('Não foi possível carregar as lives. Tente novamente.');
			} finally {
				if (!controller.signal.aborted) {
					setIsLoading(false);
				}
			}
		}

		loadStreamers();

		return () => controller.abort();
	}, []);

	return (
		<div className="app">
			<Header />

			<main className="content" id="catalogo">
				{isLoading && <p className="notice">Carregando streamers...</p>}
				{error && <p className="notice notice-error" role="alert">{error}</p>}
				{!isLoading && !error && streamers.length === 0 && (
					<p className="notice">Nenhum streamer foi encontrado.</p>
				)}

				{!isLoading && !error && streamers.length > 0 && (
					<StreamerGrid streamers={streamers} />
				)}
			</main>

			<Footer />
		</div>
	);
}
