import { createContext, useContext, useEffect } from 'react';
import { useGame } from './GameContext';
import { GPU_TYPES, USER_BASE_PRODUCTION } from '../config';

interface MinerContextType {
    mine: () => void;
    getGPUCost: (gpuId: number) => number;
    canBuyGPU: (gpuId: number) => boolean;
    buyGPU: (gpuId: number) => void;
    sellCrypto: (price: number) => void;
}

const MinerContext = createContext<MinerContextType | undefined>(undefined);

export function MinerProvider({ children }: { children: React.ReactNode }) {
    const { gameState, setGameState } = useGame();
    const { money, gpuInventory } = gameState;

    const mine = () => {
        setGameState((prevState) => ({
            ...prevState,
            cryptoCount: prevState.cryptoCount + USER_BASE_PRODUCTION,
        }));
    };

    const getGPUCost = (gpuId: number): number => {
        return gpuInventory[gpuId].price;
    };

    const canBuyGPU = (gpuId: number): boolean => {
        const cost = getGPUCost(gpuId);
        return money >= cost;
    };

    const buyGPU = (gpuId: number) => {
        const cost = getGPUCost(gpuId);
        if (money < cost) return;

        setGameState(prevState => {
            const currentGPU = gpuInventory[gpuId] || {
                count: 0,
                production: 0,
                price: 0,
            };

            const newCount = currentGPU.count + 1; // Change it to buy lot of GPU at one time -> 1 / 10 / 100
            let newProduction = 0;
            if(currentGPU.count === 0) {
                newProduction = GPU_TYPES[gpuId].baseProductionRate;
            } else {
                newProduction = currentGPU.production * GPU_TYPES[gpuId].productionMultiplier;
            }
            
            const newPrice = currentGPU.price * GPU_TYPES[gpuId].costMultiplier;

            return {
                ...prevState,
                money: prevState.money - cost,
                gpuInventory: {
                    ...prevState.gpuInventory,
                    [gpuId]: {
                        ...currentGPU,
                        count: newCount,
                        production: newProduction,
                        price: newPrice,
                    },
                },
            }
        });
    };

    const sellCrypto = (price: number) => {
        setGameState(prevState => ({
            ...prevState,
            money: prevState.money + prevState.cryptoCount * price,
            cryptoCount: 0,
        }));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            let totalProduction = 0;
            for (const gpuId in gpuInventory) {
                const gpu = gpuInventory[gpuId];
                if(!gpu) continue;

                totalProduction += gpu.production;
            }

            if(totalProduction > 0){
                setGameState(prevState => ({
                    ...prevState,
                    cryptoCount: prevState.cryptoCount + totalProduction,
                }));
            }
        }, 1000); // 1 second interval for mining

    return () => clearInterval(interval);
    }, [gpuInventory, setGameState]);

    return (
        <MinerContext.Provider 
        value={{ 
            mine, 
            getGPUCost,
            canBuyGPU,
            buyGPU,
            sellCrypto,
        }}>
            {children}
        </MinerContext.Provider>
    )
}

export function useMiner() {
    const context = useContext(MinerContext);
    if (!context) {
      throw new Error('useMiner must be used within a MinerProvider');
    }
    return context;
}