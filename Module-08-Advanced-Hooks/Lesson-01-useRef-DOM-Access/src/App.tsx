// LESSON: useRef — DOM Access
// useRef gives you a mutable object whose .current property persists across renders.
// Attach it to a JSX element with the ref prop to get direct access to the DOM node.

import { useState, useRef, useEffect } from 'react';

export default function App() {
  const [message, setMessage] = useState('');

  // TODO 1: Create a ref typed for an HTML input element:
  //         const inputRef = useRef<HTMLInputElement>(null);

  // TODO 2: Attach the ref to the <input> element below with the ref prop,
  //         then add a useEffect with [] that calls inputRef.current?.focus()
  //         so the input is auto-focused when the component mounts.

  // TODO 3: In the handleClear function, after clearing the message state,
  //         call inputRef.current?.focus() so focus returns to the input.

  function handleClear(): void {
    setMessage('');
    // focus the input here
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Chat Input</h1>
      <input
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />
      <button onClick={handleClear}>Clear & Focus</button>
      <p style={{ color: "#888", marginTop: "0.5rem" }}>Characters: {message.length}</p>
    </div>
  );
}
