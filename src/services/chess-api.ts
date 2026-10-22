import type { StreamersResponse } from '../types/streamer';

const STREAMERS_API_URL = 'https://api.chess.com/pub/streamers';

export async function fetchStreamers(signal?: AbortSignal) {
	const response = await fetch(STREAMERS_API_URL, { signal });

	if (!response.ok) {
		throw new Error(`Erro ao buscar streamers: ${response.status}`);
	}

	const data: StreamersResponse = await response.json();
	if (!Array.isArray(data.streamers)) {
		throw new Error('Resposta inválida da API de streamers.');
	}

	return data.streamers;
}
