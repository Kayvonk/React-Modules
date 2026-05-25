// LESSON: Derived State
// Compute summary values directly in the render body — no useEffect + setState needed.
// Derived values update automatically whenever the source state they depend on changes.

import { useState } from 'react';

const INITIAL_SESSIONS = [
  { id: 1, label: "Morning Run",    minutes: 35, calories: 310 },
  { id: 2, label: "Evening Cycle",  minutes: 55, calories: 480 },
  { id: 3, label: "Yoga",           minutes: 30, calories: 150 },
];

export default function App() {
  const [sessions, setSessions] = useState(INITIAL_SESSIONS);

  // TODO 1: Compute totalMinutes from sessions using Array.reduce() — replace the 0 placeholder.
  const totalMinutes = 0;

  // TODO 2: Compute totalCalories the same way using reduce.
  const totalCalories = 0;

  // TODO 3: Compute avgDuration (totalMinutes / sessions.length, or 0 if empty)
  //         and longestSession (the highest minutes value, or 0 if empty).
  const avgDuration = 0;
  const longestSession = 0;

  function removeSession(id) {
    setSessions(prev => prev.filter(s => s.id !== id));
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "480px" }}>
      <h1>Fitness Tracker</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
        <div style={{ background: "#f0f0f0", padding: "0.75rem", borderRadius: "4px" }}>
          <strong>Total Minutes</strong><br />{totalMinutes}
        </div>
        <div style={{ background: "#f0f0f0", padding: "0.75rem", borderRadius: "4px" }}>
          <strong>Total Calories</strong><br />{totalCalories}
        </div>
        <div style={{ background: "#f0f0f0", padding: "0.75rem", borderRadius: "4px" }}>
          <strong>Avg Duration</strong><br />{avgDuration.toFixed(1)} min
        </div>
        <div style={{ background: "#f0f0f0", padding: "0.75rem", borderRadius: "4px" }}>
          <strong>Longest Session</strong><br />{longestSession} min
        </div>
      </div>
      <ul>
        {sessions.map(s => (
          <li key={s.id} style={{ marginBottom: "0.5rem" }}>
            {s.label} — {s.minutes} min, {s.calories} cal
            <button onClick={() => removeSession(s.id)} style={{ marginLeft: "0.5rem" }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
