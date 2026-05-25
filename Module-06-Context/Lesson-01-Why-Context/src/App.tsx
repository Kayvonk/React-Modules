// LESSON: Why Context?
// Prop drilling means passing data through intermediate components that don't use it.
// This lesson shows the pain — the next lesson shows how Context fixes it.

import { useState } from 'react';

// ── Bottom: only this component actually uses destination ──────
function DestinationBadge() {
  // TODO 3: Accept destination as a prop and render it inside a <span>.
  //         Also add a console.log here so you can see it re-renders every time
  //         destination changes — even though ItinerarySection doesn't use it.
  return <span>Destination: ?</span>;
}

// ── Middle: doesn't use destination, just passes it down ──────
function ItinerarySection() {
  // TODO 2: Accept destination as a prop and pass it to DestinationBadge.
  //         Add a console.log here too — notice it re-renders even though it doesn't care.
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h2>Itinerary</h2>
      <DestinationBadge />
    </div>
  );
}

// ── Top: owns the state ───────────────────────────────────────
export default function App() {
  const [destination, setDestination] = useState('Paris');

  // TODO 1: Pass destination as a prop to ItinerarySection.

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Trip Planner</h1>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setDestination('Paris')}>Paris</button>
        <button onClick={() => setDestination('Tokyo')}>Tokyo</button>
        <button onClick={() => setDestination('New York')}>New York</button>
      </div>
      <ItinerarySection />
    </div>
  );
}
