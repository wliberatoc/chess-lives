import { ChessIcon } from '../icons';
import { RefreshButton } from '../refresh-button';
import { SearchBar } from '../search-bar';
import './header.css';

type HeaderProps = {
	isRefreshing: boolean;
	onRefresh: () => void;
	searchTerm: string;
	onSearchChange: (value: string) => void;
};

export function Header({
	isRefreshing,
	onRefresh,
	searchTerm,
	onSearchChange,
}: HeaderProps) {
	return (
		<header className="site-header">
			<div className="header-inner">
				<div className="topbar">
					<a className="brand" href="#catalogo" aria-label="Chess Live — ir para o catálogo">
						<span className="brand-mark">
							<ChessIcon className="brand-icon" />
						</span>
						<span>Chess Live</span>
					</a>

					<RefreshButton isRefreshing={isRefreshing} onRefresh={onRefresh} />
				</div>

				<div className="hero-copy">
					<p className="eyebrow">Streamers de xadrez</p>
					<h1>Escolha sua próxima live</h1>
					<p className="subtitle">
						Encontre criadores, acompanhe quem está ao vivo e entre na partida.
					</p>

					<SearchBar value={searchTerm} onChange={onSearchChange} />
				</div>
			</div>
		</header>
	);
}
