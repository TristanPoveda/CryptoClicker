import { formatNumber } from '../utils/formatNumber';
import { useGame } from '../context/GameContext';
import Panel from './ui/Panel';

export default function CryptoDetails() : React.ReactNode {
    const { gameState } = useGame();
    const currentCrypto = gameState.cryptoList?.[gameState.cryptoIndex];

    if(!currentCrypto) return null;

    return (
        <Panel background='rgba(90, 90, 90, 0.3)'>
            <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '10px',}}>
                <img
                    src={currentCrypto.image}
                    alt={currentCrypto.name}
                    width={50}
                    height={50}
                    style={{ marginRight: '10px', borderRadius: '500%' }}
                />
                <div>
                    <strong>{currentCrypto.name}</strong> ({currentCrypto.symbol.toUpperCase()})<br />
                    Current Price: ${formatNumber(currentCrypto.current_price)}
                </div>
            </div>
        </Panel>
    );
}