// LESSON: useDebounce
// Debouncing delays propagating a value until the input has paused for a set time.
// Use setTimeout + cleanup in a useEffect — the cleanup resets the timer on each change.

import { useState, useEffect } from 'react';

const PRODUCTS = [
  'Mechanical Keyboard', 'Wireless Mouse', 'USB-C Hub', 'Standing Desk',
  'Monitor Arm', 'Webcam', 'Microphone', 'Desk Lamp', 'Cable Management',
  'Ergonomic Chair', 'Laptop Stand', 'Keyboard Wrist Rest', 'Mouse Pad',
  'Headphone Stand', 'LED Desk Light', 'Power Strip', 'Blue Light Glasses',
  'Whiteboard', 'Sticky Notes', 'Notebook',
];

// TODO 1: Create a useDebounce<T>(value: T, delay: number): T hook using
//         useState and useEffect. The effect should set a setTimeout and
//         return a cleanup that calls clearTimeout.

// TODO 2: The cleanup is the key mechanism — it resets the timer each time value changes,
//         so the debounced value only updates after the input pauses.
//         Make sure your cleanup function returns clearTimeout(id).

export default function App() {
  const [query, setQuery] = useState('');

  // TODO 3: Call useDebounce(query, 300) to get a debouncedQuery, then use
  //         debouncedQuery (not query) to filter PRODUCTS below.

  const filtered = PRODUCTS.filter(p => p.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{ padding: "2rem", maxWidth: "360px" }}>
      <h1>Product Search</h1>
      <input
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        placeholder="Search products..."
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <p style={{ color: "#888" }}>
        Showing {filtered.length} results
        {query !== query && ' (debounced)'}
      </p>
      <ul>
        {filtered.map(p => <li key={p}>{p}</li>)}
      </ul>
    </div>
  );
}
