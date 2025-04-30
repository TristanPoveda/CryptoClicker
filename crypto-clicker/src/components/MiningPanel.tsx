import { useMiner } from '../context/MiningContext';
import Panel from './ui/Panel';

export default function MiningPanel(): React.ReactNode {
    const { mine } = useMiner();

    return (
        <Panel>
            <div style={{
                padding: '10px 20px',
                marginTop: '2rem', 
                marginBottom: '20px' }}>
            <button onClick={mine} >
                Mining crypto
            </button>
            </div>
        </Panel>
    );
}