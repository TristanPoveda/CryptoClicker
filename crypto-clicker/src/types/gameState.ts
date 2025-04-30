//---------------------------------------//

export interface CryptoState {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
}

//---------------------------------------//

// Game State
// This is the main state of the game, which will be saved and loaded

export interface GameState {
  cryptoList: CryptoState[];
  cryptoIndex: number;
  cryptoCount: number;
  rebirthLevel: number;
  money: number;
  gpuInventory: GPUInventory;
}

//---------------------------------------//

export interface GPUInventory {
  [gpuId: number]: GPUInstanceState;
}

export interface GPUInstanceState {
  count: number;
  production: number;
  price: number;
  // Level ?
  // Bonus multiplier ?
}

//---------------------------------------//

// Better to place on config file
//  |                 |
// \/                \/
export interface GPUTypeState {
  id: number;
  name: string;
  baseCost: number;
  baseProductionRate: number;
  image: string;
  costMultiplier: number;
  productionMultiplier: number;
}