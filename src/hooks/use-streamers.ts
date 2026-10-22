import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchStreamers } from '../services/chess-api';
import type { Streamer } from '../types/streamer';

const REFRESH_INTERVAL = 5 * 60 * 1000;

export function useStreamers() {
	const [streamers, setStreamers] = useState<Streamer[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const activeRequest = useRef<AbortController | null>(null);

	const refresh = useCallback(async () => {
		activeRequest.current?.abort();

		const controller = new AbortController();
		activeRequest.current = controller;

		try {
			setIsLoading(true);
			setError(null);

			const data = await fetchStreamers(controller.signal);
			setStreamers(data);
		} catch (requestError) {
			if (requestError instanceof Error && requestError.name === 'AbortError') {
				return;
			}

			setError('Não foi possível atualizar as lives. Tente novamente.');
		} finally {
			if (activeRequest.current === controller) {
				setIsLoading(false);
				activeRequest.current = null;
			}
		}
	}, []);

	useEffect(() => {
		const initialRequestId = window.setTimeout(() => {
			void refresh();
		}, 0);

		const intervalId = window.setInterval(() => {
			void refresh();
		}, REFRESH_INTERVAL);

		return () => {
			window.clearTimeout(initialRequestId);
			window.clearInterval(intervalId);
			activeRequest.current?.abort();
			activeRequest.current = null;
		};
	}, [refresh]);

	return { streamers, isLoading, error, refresh };
}
