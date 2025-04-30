import { useGame } from '../context/GameContext';
import { useMiner } from '../context/MiningContext';
import Panel from './ui/Panel';

export default function MiningPanel(): React.ReactNode {
    const { gameState } = useGame();
    const { mine } = useMiner();
    const { cryptoCount } = gameState;

    return (
        <Panel>
            <div style={{
                padding: '10px 20px',
                marginTop: '2rem', 
                marginBottom: '2rem' }}>
            <p>Owned Cryptos: <strong>{cryptoCount}</strong></p>
            <button onClick={mine} >
                Mining crypto
            </button>
            </div>
        </Panel>
    );
}