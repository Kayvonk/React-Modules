// LESSON: Conditional Rendering
// Use the ternary operator for two-outcome choices and && for "show or nothing".
// Both work inside JSX because they are just JavaScript expressions.

import { useState } from 'react';

export default function App() {
  const [status, setStatus] = useState('on-time');

  // TODO 1: Replace the static "green" color below with a ternary so the banner
  //         is green when status is "on-time", yellow for "delayed", and red for "cancelled".

  // TODO 2: Below the banner, use && to show a support link (<a>) only when
  //         status is "cancelled".

  // TODO 3: Below the buttons, use && to show a gate number (any hardcoded value)
  //         only when status is "on-time".

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Flight Status Board</h1>
      <div style={{ background: "green", color: "white", padding: "1rem", borderRadius: "4px" }}>
        Status: {status}
      </div>

      <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
        <button onClick={() => setStatus('on-time')}>On Time</button>
        <button onClick={() => setStatus('delayed')}>Delayed</button>
        <button onClick={() => setStatus('cancelled')}>Cancelled</button>
      </div>
    </div>
  );
}
