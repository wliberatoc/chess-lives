import { useEffect, useState } from 'react';
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
		<main>
			<h1>Escolha sua live</h1>

			{isLoading && <p>Carregando streamers...</p>}
			{error && <p role="alert">{error}</p>}
			{!isLoading && !error && streamers.length === 0 && (
				<p>Nenhum streamer foi encontrado.</p>
			)}

			{!isLoading && !error && streamers.length > 0 && (
				<p>{streamers.length} streamers encontrados.</p>
			)}
		</main>
	);
}
