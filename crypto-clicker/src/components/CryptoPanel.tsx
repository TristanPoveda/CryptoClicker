import CryptoDetails from './CryptoDetails';
import PlayerStats from './PlayerStats';
import RebirthButton from './RebirthButton';
import SellButton from './SellButton';
import Panel from './ui/Panel';

export default function CryptoPanel() : React.ReactNode {
    return (
        <Panel>
            <div style={{ padding: '20px' }}>
                <CryptoDetails />
                <PlayerStats />
                <SellButton />
                <RebirthButton />
            </div>
        </Panel>
    );
}