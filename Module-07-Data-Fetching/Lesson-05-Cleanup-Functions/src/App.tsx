// LESSON: Cleanup Functions
// Use AbortController to cancel in-flight fetch requests when the component
// re-runs its effect — preventing stale state updates.

import { useState, useEffect } from 'react';

const COINS = ['bitcoin', 'ethereum', 'dogecoin', 'solana'];

interface CoinPrice {
  id:          string;
  name:        string;
  symbol:      string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function App() {
  const [selectedCoin, setSelectedCoin] = useState(COINS[0]);
  const [price, setPrice] = useState<CoinPrice | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setPrice(null);

    // TODO 1: Create an AbortController and pass its signal to the fetch call below.
    //         const controller = new AbortController();

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${selectedCoin}`)
      .then(res => res.json())
      .then(data => { setPrice(data[0]); setIsLoading(false); });

    // TODO 2: Return a cleanup function that calls controller.abort().
    //         This cancels the in-flight request when selectedCoin changes before it finishes.

    // TODO 3: In the .catch() block, check if error.name === 'AbortError' and skip
    //         the state update if so (an aborted request isn't a real error).

  }, [selectedCoin]);

  return (
    <div style={{ padding: "2rem", maxWidth: "360px" }}>
      <h1>Crypto Prices</h1>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        {COINS.map(coin => (
          <button key={coin} onClick={() => setSelectedCoin(coin)}
            style={{ fontWeight: coin === selectedCoin ? 'bold' : 'normal' }}>
            {coin}
          </button>
        ))}
      </div>
      {isLoading && <p>Loading...</p>}
      {price && (
        <div>
          <h2>{price.name} ({price.symbol.toUpperCase()})</h2>
          <p style={{ fontSize: "1.5rem" }}>${price.current_price.toLocaleString()}</p>
          <p style={{ color: price.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
            {price.price_change_percentage_24h.toFixed(2)}% (24h)
          </p>
        </div>
      )}
    </div>
  );
}
