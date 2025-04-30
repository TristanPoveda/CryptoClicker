import { createContext, useContext } from 'react';
import { useGame } from '../context/GameContext';

interface MinerContextType {
    cryptoCount: number;
    mine: () => void;
  }

export default function RebirthButton(): React.ReactNode {
    const { canRebirth, rebirth, currentCrypto, cryptoIndex } = useGame();
  
    if (!canRebirth || !currentCrypto) return null;
  
    return (
      <div style={{ marginTop: '2rem' }}>
        <button onClick={rebirth}>
          🔁 Rebirth → Débloquer la prochaine crypto
        </button>
        <p style={{ fontSize: '0.9rem', color: '#888' }}>
          Niveau actuel : {cryptoIndex + 1} — Objectif atteint sur {currentCrypto.name}
        </p>
      </div>
    );
  }