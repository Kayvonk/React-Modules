// LESSON: Textarea and Select
// Control a <textarea> and <select> the same way as a text input:
// pass a value prop and update it with onChange.

import { useState } from 'react';

const PRIORITIES = ['low', 'medium', 'high', 'critical'];

const PRIORITY_COLORS = { low: '#888', medium: '#DAA520', high: '#FF6347', critical: '#DC143C' };

export default function App() {
  // TODO 1: Declare a state variable called description (empty string) and wire
  //         the <textarea> below with value and onChange so React controls it.

  // TODO 2: Declare a state variable called priority (default 'low') and wire
  //         the <select> with value and onChange the same way.

  // TODO 3: Below the textarea, show a live word count derived from the description state
  //         (split on whitespace, filter empty strings, display the count).

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Support Ticket</h1>
      <div style={{ marginBottom: "0.75rem" }}>
        <label>Issue Description<br />
          <textarea
            rows={5}
            style={{ width: "100%", resize: "vertical" }}
            placeholder="Describe your issue..."
          />
        </label>
      </div>
      <div style={{ marginBottom: "0.75rem" }}>
        <label>Priority<br />
          <select style={{ width: "100%" }}>
            {PRIORITIES.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </label>
      </div>
      <div style={{ padding: "0.5rem", background: "#eee", borderRadius: "4px" }}>
        Priority badge — color should change based on selection
      </div>
    </div>
  );
}
