// LESSON: Typing State
// Pass a type parameter to useState<T>() to tell TypeScript what values are allowed.
// Use union types like string | null for state that starts empty.

import { useState } from 'react';

export default function App() {
  // TODO 1: Add an explicit <number> generic to the count useState so TypeScript
  //         knows count is always a number.
  const [count, setCount] = useState(0);

  // TODO 2: Declare lastMessage with type string | null (starting as null).
  //         TypeScript needs the explicit generic here because it can't infer null → string.
  const [lastMessage, setLastMessage] = useState(null);

  // TODO 3: Annotate the handleAdd and handleClear functions with : void return types.

  function handleAdd() {
    const messages = ['New follower!', 'Someone liked your post.', 'You have a mention.'];
    setCount(c => c + 1);
    setLastMessage(messages[Math.floor(Math.random() * messages.length)]);
  }

  function handleClear() {
    setCount(0);
    setLastMessage(null);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🔔 Notifications</h1>
      <p>Unread: <strong>{count}</strong></p>
      {lastMessage && <p style={{ color: "#555" }}>Latest: {lastMessage}</p>}
      <button onClick={handleAdd}>Add Notification</button>
      <button onClick={handleClear} style={{ marginLeft: "0.5rem" }}>Clear All</button>
    </div>
  );
}
