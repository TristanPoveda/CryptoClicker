import { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { fetchCryptoList } from '../services/cryptoService';

export function useCryptoList(){
    const { gameState, setGameState } = useGame();

    useEffect(() => {
        async function loadCryptoList () {
            if(gameState.cryptoList && gameState.cryptoList.length > 0) 
                return; // If cryptoList is already loaded, do nothing
            try{
                const data = await fetchCryptoList();
                setGameState(prev => ({
                    ...prev,
                    cryptoList: data,
                  }));
            } catch (error){
                console.error('Error fetching crypto list:', error);
            }
        }

        loadCryptoList();
    }, [gameState.cryptoList, setGameState]);
}