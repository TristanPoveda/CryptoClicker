export const SAVE_INTERVAL_MS = 30000; // Delay between saves in milliseconds

// Player Constants
export const USER_BASE_PRODUCTION = 1; // Base production of the player

// Rebirth
export const rebirthThreshold = 1; // Amount of money needed to rebirth

//GPU Types
export const GPU_TYPES: import ('./types/gameState').GPUTypeState[] = [
    {
    id: 0,
    name: 'Basic GPU',
    baseCost: 0.001,
    baseProductionRate: 1,
    image: 'https://m.media-amazon.com/images/I/71PCEkj9DYS.jpg',
    costMultiplier: 1.15,
    productionMultiplier: 1.1,
    },
    {
    id: 1,
    name: 'Advanced GPU',
    baseCost: 0.01,
    baseProductionRate: 5,
    image: 'https://example.com/advanced_gpu.png',
    costMultiplier: 1.2,
    productionMultiplier: 1.15,
    },
];