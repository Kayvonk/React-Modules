// LESSON: useEffect Basics
// useEffect runs code after React renders — use it for timers, subscriptions, and other side effects.
// Always return a cleanup function to stop ongoing work when the component unmounts.

import { useState, useEffect } from 'react';

const QUOTES = [
  "Stay hungry, stay foolish.",
  "Done is better than perfect.",
  "Make something people want.",
  "Move fast and learn things.",
];

export default function App() {
  const [index, setIndex] = useState(0);

  // TODO 1: Add a useEffect with an empty dependency array [] that starts a setInterval
  //         advancing the index every 3 seconds (wrap around using % QUOTES.length).

  // TODO 2: Return a cleanup function from that useEffect that calls clearInterval
  //         so the timer stops if the component ever unmounts.

  // TODO 3: Change the dependency array from [] to [index] — notice the interval
  //         now restarts from 3 seconds every time a quote change happens.
  //         Switch it back to [] when you're done experimenting.

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Quote of the Moment</h1>
      <p style={{ fontSize: "1.25rem", fontStyle: "italic" }}>
        "{QUOTES[index]}"
      </p>
      <p style={{ color: "#888" }}>{index + 1} / {QUOTES.length}</p>
    </div>
  );
}
