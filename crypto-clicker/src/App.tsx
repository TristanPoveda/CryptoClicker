import { GameProvider } from './context/GameContext';
import { MinerProvider } from './context/MiningContext';
import { useCryptoList } from './hooks/useCryptoList';

import CryptoPanel from './components/CryptoPanel';
import MiningPanel from './components/MiningPanel';
import GpuStore from './components/GPUShop';
import SaveControls from './components/SaveControls';

function Game(): React.ReactNode {
  useCryptoList();

  return (
    <div style={{ padding: '2rem', minWidth: '400px', margin: 'auto' }}>
      <h1>Crypto Clicker</h1>
      <CryptoPanel />
      <MiningPanel />
      <GpuStore />
      <SaveControls />
    </div>
  );
}

export default function App(): React.ReactNode {
  return (
    <GameProvider>
      <MinerProvider>
        <Game />
      </MinerProvider>
    </GameProvider>
  );
}