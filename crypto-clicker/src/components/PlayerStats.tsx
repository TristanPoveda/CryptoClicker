import { formatNumber } from '../utils/formatNumber';
import { useGame } from '../context/GameContext';

export default function PlayerStats(): React.ReactNode {
    const { gameState } = useGame();
    const { cryptoCount, money } = gameState;

    return (
        <div style={{ marginBottom: '1rem' }}>
            <p>Crypto possessed: <strong>{formatNumber(cryptoCount)}</strong></p>
            <p>Available funds: <strong>${formatNumber(money)}</strong></p>
        </div>
    );
}