export const SAVE_INTERVAL_MS = 30000; // Delay between saves in milliseconds

// Player Constants
export const USER_BASE_PRODUCTION = 1; // Base production of the player

//GPU Types
export const GPU_TYPES: import ('./types/gameState').GPUTypeState[] = [
    {
    id: 0,
    name: 'Basic GPU',
    baseCost: 0,
    baseProductionRate: 1,
    image: 'https://example.com/basic_gpu.png',
    costMultiplier: 1.15,
    productionMultiplier: 1.1,
    },
    {
    id: 1,
    name: 'Advanced GPU',
    baseCost: 0,
    baseProductionRate: 5,
    image: 'https://example.com/advanced_gpu.png',
    costMultiplier: 1.2,
    productionMultiplier: 1.15,
    },
];