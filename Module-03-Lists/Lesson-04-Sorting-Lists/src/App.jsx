// LESSON: Sorting Lists
// Sort a derived list from state using Array.sort() — always spread first to
// avoid mutating the source array. Drive the sort key with state.

import { useState } from 'react';

const PLAYERS = [
  { id: 1, name: "Alice",   score: 4200, games: 31 },
  { id: 2, name: "Bob",     score: 3800, games: 45 },
  { id: 3, name: "Charlie", score: 5100, games: 28 },
  { id: 4, name: "Dana",    score: 2900, games: 52 },
  { id: 5, name: "Eve",     score: 4750, games: 19 },
];

export default function App() {
  const [sortKey, setSortKey] = useState('score');

  // TODO 1: Derive sortedPlayers by spreading PLAYERS into a new array and calling
  //         .sort() with a comparator that sorts descending by sortKey.
  //         (Do NOT sort PLAYERS directly — that mutates the original.)

  // TODO 2: Wire the three buttons below so each sets sortKey to 'score', 'name', or 'games'.

  // TODO 3: When mapping sortedPlayers, display each player's rank number based on
  //         their position in the sorted array (rank 1 = index 0 + 1).

  return (
    <div style={{ padding: "2rem", maxWidth: "420px" }}>
      <h1>Leaderboard</h1>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <button onClick={() => {}}>Sort by Score</button>
        <button onClick={() => {}}>Sort by Name</button>
        <button onClick={() => {}}>Sort by Games</button>
      </div>
      <ol>
        {PLAYERS.map(p => (
          <li key={p.id}>{p.name} — {p.score} pts</li>
        ))}
      </ol>
    </div>
  );
}
