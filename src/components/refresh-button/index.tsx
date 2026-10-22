import { RefreshIcon } from '../icons';
import './refresh-button.css';

type RefreshButtonProps = {
	isRefreshing: boolean;
	onRefresh: () => void;
};

export function RefreshButton({ isRefreshing, onRefresh }: RefreshButtonProps) {
	return (
		<button
			className="refresh-btn"
			type="button"
			onClick={onRefresh}
			disabled={isRefreshing}
		>
			<RefreshIcon className={`refresh-icon ${isRefreshing ? 'is-spinning' : ''}`} />
			<span>{isRefreshing ? 'Atualizando...' : 'Atualizar lista'}</span>
		</button>
	);
}
