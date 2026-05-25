// LESSON: Prop Drilling
// When a deeply nested component needs data, every component in between
// must receive and pass down the prop — even if it doesn't use it.

import { useState } from 'react';

// ── Bottom of the tree: displays the table number ─────────────
function TableBadge() {
  // TODO 3: Accept tableNumber as a prop and render it inside a <span>.
  return <span>Table: ?</span>;
}

// ── Middle: doesn't use tableNumber, just passes it down ──────
function OrderSection() {
  // TODO 2: Accept tableNumber as a prop and pass it down to TableBadge.
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h2>Current Order</h2>
      <TableBadge />
    </div>
  );
}

// ── Top: owns the state ───────────────────────────────────────
export default function App() {
  const [tableNumber, setTableNumber] = useState(1);

  // TODO 1: Pass tableNumber as a prop to OrderSection.

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Order System</h1>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setTableNumber(n => n - 1)}>−</button>
        <strong style={{ margin: "0 1rem" }}>Table {tableNumber}</strong>
        <button onClick={() => setTableNumber(n => n + 1)}>+</button>
      </div>
      <OrderSection />
    </div>
  );
}
