// LESSON: Typing Events
// Type event handlers with React.ChangeEvent<T> or React.MouseEvent<T> so
// TypeScript knows which properties are available on the event object.

import { useState } from 'react';

export default function App() {
  const [raw, setRaw] = useState('');
  const [formatted, setFormatted] = useState('');

  // TODO 1: Add the type annotation for handleChange so it accepts a
  //         React.ChangeEvent<HTMLInputElement> and returns void.

  function handleChange(e) {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setRaw(digits);
    if (digits.length <= 3) setFormatted(digits);
    else if (digits.length <= 6) setFormatted(`(${digits.slice(0,3)}) ${digits.slice(3)}`);
    else setFormatted(`(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`);
  }

  // TODO 2: Add the type annotation for handleClear so it accepts a
  //         React.MouseEvent<HTMLButtonElement> and returns void.

  function handleClear(e) {
    e.currentTarget.blur();
    setRaw('');
    setFormatted('');
  }

  // TODO 3: Notice that e.target.value in handleChange is now correctly typed as
  //         string — no casting needed. Add a comment explaining why.

  return (
    <div style={{ padding: "2rem", maxWidth: "300px" }}>
      <h1>Phone Formatter</h1>
      <input
        value={raw}
        onChange={handleChange}
        placeholder="Enter digits..."
        style={{ width: "100%", padding: "0.5rem" }}
      />
      <p style={{ fontSize: "1.25rem" }}>{formatted || "—"}</p>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
