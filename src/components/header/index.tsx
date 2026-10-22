import { ChessIcon } from '../icons';
import './header.css';

export function Header() {
	return (
		<header className="site-header">
			<div className="header-inner">
				<a className="brand" href="#catalogo" aria-label="Chess Live — ir para o catálogo">
					<span className="brand-mark">
						<ChessIcon className="brand-icon" />
					</span>
					<span>Chess Live</span>
				</a>

				<div className="hero-copy">
					<p className="eyebrow">Streamers de xadrez</p>
					<h1>Escolha sua próxima live</h1>
					<p className="subtitle">
						Encontre criadores, acompanhe quem está ao vivo e entre na partida.
					</p>
				</div>
			</div>
		</header>
	);
}
