// LESSON: What Is a Custom Hook
// A custom hook is a plain function whose name starts with "use" that calls
// other hooks inside. It lets you extract and reuse stateful logic.

import { useState } from 'react';

// TODO 1: Create a useCounter hook that takes initialValue and max as parameters
//         and returns { count, increment, decrement, reset }.
//         Move the count state and all logic into the hook.

// TODO 2: Replace the duplicated counter logic in DownloadProgress with a useCounter call.
//         Use initialValue=0, max=100.

// TODO 3: Replace the duplicated logic in RatingPicker with useCounter.
//         Use initialValue=1, max=5.
//         Verify that each component has its OWN count — incrementing one doesn't affect the other.

function DownloadProgress() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(c => Math.min(100, c + 10));
  const decrement = () => setCount(c => Math.max(0, c - 10));
  const reset     = () => setCount(0);
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "4px", marginBottom: "0.75rem" }}>
      <h3>Download Progress</h3>
      <p>{count}%</p>
      <button onClick={decrement}>−10%</button>
      <button onClick={increment} style={{ marginLeft: "0.5rem" }}>+10%</button>
      <button onClick={reset}     style={{ marginLeft: "0.5rem" }}>Reset</button>
    </div>
  );
}

function RatingPicker() {
  const [count, setCount] = useState(1);
  const increment = () => setCount(c => Math.min(5, c + 1));
  const decrement = () => setCount(c => Math.max(1, c - 1));
  const reset     = () => setCount(1);
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "4px" }}>
      <h3>Rating Picker</h3>
      <p>{'⭐'.repeat(count)}</p>
      <button onClick={decrement}>−</button>
      <button onClick={increment} style={{ marginLeft: "0.5rem" }}>+</button>
      <button onClick={reset}     style={{ marginLeft: "0.5rem" }}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "360px" }}>
      <h1>Custom Hooks</h1>
      <DownloadProgress />
      <RatingPicker />
    </div>
  );
}
