import { useMiner } from '../context/MiningContext';
import { useGame } from '../context/GameContext';
import { GPU_TYPES } from '../config';
import { formatNumber } from '../utils/formatNumber';
import Panel from './ui/Panel';

export default function GPUShop() : React.ReactNode {
    const { gameState } = useGame();
    const { buyGPU, canBuyGPU, getGPUCost } = useMiner();

    return (
        <Panel>
            <div style={{ 
                marginTop: '2rem',
                padding: '20px',
                }}>
            {GPU_TYPES.map(gpu => {
                const owned = gameState.gpuInventory[gpu.id]?.count || 0;
                const production = gameState.gpuInventory[gpu.id]?.production || 0;
                console.log();
                const cost = getGPUCost(gpu.id);
                const isDisabled = !canBuyGPU(gpu.id);
    
                return (
                    <div
                        key={gpu.id}
                        style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '4px',
                        }}>
                        <strong>{gpu.name}</strong><br />
                        Quantity: {owned} | Production : {formatNumber(production)} /s<br />
                        Price: ${formatNumber(cost)}
    
                        <br />
                        <button onClick={() => buyGPU(gpu.id)} disabled={isDisabled}>
                            Buy
                        </button>
                    </div>
                );
            })}
        </div>
        </Panel>
        
    );
}