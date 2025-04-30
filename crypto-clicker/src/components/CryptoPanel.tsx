import CryptoDetails from './CryptoDetails';
import PlayerStats from './PlayerStats';
import SellButton from './SellButton';
import Panel from './ui/Panel';

export default function CryptoPanel() : React.ReactNode {
    return (
        <Panel>
            <div style={{ padding: '20px' }}>
                <CryptoDetails />
                <PlayerStats />
                <SellButton />
            </div>
        </Panel>
    );
}