// LESSON: Form Validation
// Derive error messages from form state and display them conditionally.
// Disable the submit button when any error exists so users can't submit invalid data.

import { useState, useEffect } from 'react';

export default function App() {
  const [form, setForm] = useState({ eventName: '', guestCount: '', email: '' });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // TODO 1: Add a useEffect that watches the form state and recomputes errors.
  //         Rules: eventName must be at least 5 chars, guestCount must be 1–100,
  //         email must contain "@". Store messages in the errors object via setErrors.

  // TODO 2: Below each input, conditionally render a red <p> with the error message
  //         only when that field's error exists (use && or a ternary).

  // TODO 3: Add a disabled prop to the submit button so it's disabled whenever
  //         the errors object has any truthy values.

  function handleSubmit(e) {
    e.preventDefault();
    alert('RSVP submitted!');
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Event RSVP</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "0.75rem" }}>
          <label>Event Name<br />
            <input name="eventName" value={form.eventName} onChange={handleChange} style={{ width: "100%" }} />
          </label>
        </div>
        <div style={{ marginBottom: "0.75rem" }}>
          <label>Guest Count<br />
            <input name="guestCount" type="number" value={form.guestCount} onChange={handleChange} style={{ width: "100%" }} />
          </label>
        </div>
        <div style={{ marginBottom: "0.75rem" }}>
          <label>Email<br />
            <input name="email" type="email" value={form.email} onChange={handleChange} style={{ width: "100%" }} />
          </label>
        </div>
        <button type="submit">Submit RSVP</button>
      </form>
    </div>
  );
}
