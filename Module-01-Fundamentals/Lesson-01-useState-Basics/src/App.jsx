// LESSON: useState Basics
// useState gives a component "memory" — a value that persists between renders
// and causes the UI to update automatically when it changes.

import { useState } from 'react';

export default function App() {
  // TODO 1: Declare a state variable called subtotal using useState, starting at 0.

  // TODO 2: Wire the two buttons below so clicking "+$5" adds 5 to subtotal
  //         and clicking "+$10" adds 10 (use the state setter, not a plain variable).

  // TODO 3: Compute tip and total as regular variables derived from subtotal
  //         (do NOT create extra state for them — derive them in the render body).
  const tip = 0;   // replace with subtotal * 0.20
  const total = 0; // replace with subtotal + tip

  return (
    <div style={{ padding: "2rem", maxWidth: "300px" }}>
      <h1>Tip Calculator</h1>
      <p>Subtotal: ${0}</p>
      <button onClick={() => {}}>+$5</button>
      <button onClick={() => {}}>+$10</button>
      <button onClick={() => {}}>Reset</button>
      <hr />
      <p>Tip (20%): ${tip.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}
