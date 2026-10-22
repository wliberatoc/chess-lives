import { ChessIcon } from '../icons';
import './footer.css';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<ChessIcon className="footer-icon" />
			<p>© {currentYear} Willian Developer. Todos os direitos reservados.</p>
		</footer>
	);
}
