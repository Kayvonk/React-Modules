// LESSON: Controlled Inputs
// A controlled input means React owns the value — you set it via state and
// update it via onChange. This gives you full control over what the user types.

import { useState } from 'react';

export default function App() {
  // TODO 1: Declare a state variable called code for the coupon code, starting as an empty string.

  // TODO 2: Add value and onChange props to the <input> so React controls its value.
  //         onChange should update the code state with e.target.value.

  // TODO 3: Below the input, display a "Preview:" line showing code.toUpperCase()
  //         (derived from state — not stored separately).

  return (
    <div style={{ padding: "2rem", maxWidth: "360px" }}>
      <h1>Coupon Code</h1>
      <input
        type="text"
        placeholder="Enter code..."
        style={{ width: "100%", padding: "0.5rem" }}
      />
      <button
        disabled={true}
        style={{ marginTop: "0.5rem", display: "block" }}
      >
        Apply
      </button>
    </div>
  );
}
