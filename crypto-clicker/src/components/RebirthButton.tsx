import { useGame } from '../context/GameContext';
import { useGameActions } from '../context/GameContext';
import { rebirthThreshold } from '../config';

export default function RebirthButton(): React.ReactNode {
  const { gameState } = useGame();
  const { rebirth } = useGameActions();
  const canRebirth = gameState.money >= rebirthThreshold;

  return (
    <button
      onClick={rebirth}
      disabled={!canRebirth}
      style={{
        width: '100%',
        padding: '12px 18px',
        fontWeight: 'bold',
        backgroundColor: canRebirth ? '#ffa500' : '#444',
        color: canRebirth ? '#000' : '#aaa',
        border: 'none',
        borderRadius: '8px',
        marginTop: '1rem',
        cursor: canRebirth ? 'pointer' : 'not-allowed',
      }}
    >
      Rebirth (next Crypto) ${rebirthThreshold}
    </button>
  );
}