import { useGame } from '../context/GameContext';
import { useMiner } from '../context/MiningContext';
import { formatNumber } from '../utils/formatNumber';

export default function SellButton() : React.ReactNode {
    const { gameState } = useGame();
    const { sellCrypto } = useMiner(); 
    const currentCrypto = gameState.cryptoList?.[gameState.cryptoIndex];
    const { cryptoCount } = gameState;

    if(!currentCrypto) return null;

    const canSell = cryptoCount > 0;
    const handleSell = () => {
        if(canSell) sellCrypto(currentCrypto.current_price);
    };

    return (
        <button
            onClick={handleSell}
            disabled={!canSell}
            style={{
                width: '100%',
                padding: '12px 18px',
                fontWeight: 'bold',
                fontSize: '1rem',
                color: canSell ? '#ffffff' : '#ffffff',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                background: canSell ? '#008800' : '#660000',
                border: 'none',
                borderRadius: '12px',
                cursor: canSell ? 'pointer' : 'not-allowed',
                opacity: canSell ? 1 : .5,
                boxShadow: canSell
                    ? '0 0 4px rgba(0, 255, 0, 0.3)'
                    : '0 0 4px rgba(255, 0, 0, 0.3)',
                    transition: 'all 0.2s ease-in-out',
            }}>
            {canSell
                ? `Sell ${formatNumber(cryptoCount)}`
                : `No crypto to sell`}
        </button>
    );
}