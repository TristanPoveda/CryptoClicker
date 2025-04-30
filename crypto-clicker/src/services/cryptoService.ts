export async function fetchCryptoList(): Promise<any[]> {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Failed to fetch data from CoinGecko API');
    }

    const data = await response.json();
    
    return [...data].sort((a, b) => a.current_price - b.current_price);
}