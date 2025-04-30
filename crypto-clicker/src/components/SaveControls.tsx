import { useRef } from 'react';
import { useGame } from '../context/GameContext';

export default function SaveControls(): React.ReactNode {
    const { gameState, setGameState } = useGame();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDownload = () => {
        const dataStr = JSON.stringify(gameState, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = url;
        a.download = 'crypto-clicker-save.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleLoad = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
    
        const text = await file.text();
        try {
          const parsed = JSON.parse(text);
          setGameState(parsed);
        } catch (err) {
          alert('Not a valid save file');
        }
    };

    return (
        <div style={{ marginTop: '1rem', display: 'flex', gap: '12px' }}>
          <button onClick={handleDownload}>Dowload save</button>
            <button onClick={() => fileInputRef.current?.click()}>
                Load Save
            </button>

            <input
                ref={fileInputRef}
                type="file"
                accept="application/json"
                onChange={handleLoad}
                style={{ display: 'none' }}
            />
        </div>
      );
}