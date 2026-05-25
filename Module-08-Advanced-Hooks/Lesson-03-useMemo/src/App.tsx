// LESSON: useMemo
// useMemo caches the result of an expensive computation and only re-runs it
// when specified dependencies change — not on every render.

import { useState, useMemo } from 'react';

interface Ingredient { name: string; amount: number; unit: string; }

const RECIPE: Ingredient[] = [
  { name: "Flour",  amount: 2,   unit: "cups" },
  { name: "Sugar",  amount: 0.5, unit: "cups" },
  { name: "Butter", amount: 0.25,unit: "cups" },
  { name: "Eggs",   amount: 2,   unit: "whole" },
  { name: "Milk",   amount: 1,   unit: "cups" },
];
const BASE_SERVINGS = 8;

export default function App() {
  const [targetServings, setTargetServings] = useState(BASE_SERVINGS);
  const [unrelatedCount, setUnrelatedCount] = useState(0);

  // TODO 1: Wrap the scaledIngredients computation below in useMemo()
  //         so it only re-runs when RECIPE or targetServings changes.

  // TODO 2: Set the dependency array to [targetServings] (RECIPE is a constant, so omitting it is fine).

  // TODO 3: Add a console.log("Computing scaled ingredients") inside the memo function
  //         to confirm it does NOT log when you click the unrelated counter below.

  const scaledIngredients: Ingredient[] = RECIPE.map(ing => ({
    ...ing,
    amount: +(ing.amount * targetServings / BASE_SERVINGS).toFixed(2),
  }));

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Recipe Scaler</h1>
      <label>
        Servings: {targetServings}
        <input type="range" min={1} max={32} value={targetServings}
          onChange={(e) => setTargetServings(Number(e.target.value))}
          style={{ display: "block", width: "100%" }} />
      </label>
      <ul style={{ marginTop: "1rem" }}>
        {scaledIngredients.map(ing => (
          <li key={ing.name}>{ing.amount} {ing.unit} {ing.name}</li>
        ))}
      </ul>
      <hr />
      <p>Unrelated counter: {unrelatedCount}</p>
      <button onClick={() => setUnrelatedCount(c => c + 1)}>
        Increment (should NOT recompute ingredients)
      </button>
    </div>
  );
}
