// LESSON: Keys and UUID
// Array-index keys break when items are removed from the middle of a list.
// Generate stable IDs with crypto.randomUUID() at the moment each item is created.

import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  // TODO 1: In handleAdd, create a new item object with { id: crypto.randomUUID(), name: input }
  //         and add it to the items list (don't mutate — use spread or concat).

  function handleAdd(e) {
    e.preventDefault();
    if (!input.trim()) return;
    // add item here
    setInput('');
  }

  // TODO 2: In the list below, map items to <li> elements using item.id as the key.

  // TODO 3: Add a "Remove" button inside each <li> that filters the item out by its id.

  return (
    <div style={{ padding: "2rem", maxWidth: "360px" }}>
      <h1>Grocery List</h1>
      <form onSubmit={handleAdd} style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add item..." />
        <button type="submit">Add</button>
      </form>
      <ul>
        {/* render items here */}
      </ul>
    </div>
  );
}
