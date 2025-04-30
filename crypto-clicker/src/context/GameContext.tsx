import { createContext, useContext, useEffect, useState } from 'react';
import { GPU_TYPES, SAVE_INTERVAL_MS } from '../config';
import { GameState, GPUInventory } from '../types/gameState';

const LOCAL_STORAGE_KEY = 'cryptoGameState';

const defaultGameState: GameState = {
    cryptoList: [],
    cryptoIndex: 0,
    cryptoCount: 0,
    rebirthLevel: 0,
    money: 0,
    gpuInventory: initGPUInventory(),
}

function initGPUInventory(): GPUInventory {
    const inventory: GPUInventory = {};
    GPU_TYPES.forEach(gpu => {
        inventory[gpu.id] = {
            count: 0,
            production: 0,
            price: gpu.baseCost,
        };
    });

    return inventory;
}

interface GameContextType {
    gameState: GameState;
    setGameState: React.Dispatch<React.SetStateAction<GameState>>;
    loading: boolean;
}

const GameContext = createContext<GameContextType>({ gameState: defaultGameState, setGameState: () => {}, loading: true });

export function GameProvider({ children }: { children: React.ReactNode }){
    const [gameState, setGameState] = useState<GameState>(defaultGameState);
    const [loading, setLoading] = useState<boolean>(true);

    // Load
    useEffect(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) setGameState(JSON.parse(saved));
        else setGameState(defaultGameState);
        setLoading(false);
    }, []);

    // Save
    useEffect(() => {
        if(loading) return;
        if (!gameState) return;

        const timeout = setTimeout(() => {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameState));
        }, SAVE_INTERVAL_MS);
    
        return () => clearTimeout(timeout);
    }, [gameState, loading]);

    return (
        <GameContext.Provider value={{ gameState, setGameState, loading }}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    const context  = useContext(GameContext);
    if (!context ) throw new Error('useGame must be used within a GameProvider');
    return context ;
  }