// LESSON: useRef — Persisting Values
// Refs can hold any mutable value that persists across renders without causing re-renders.
// This makes them ideal for timer IDs, previous values, and other non-rendered bookkeeping.

import { useState, useRef } from 'react';

export default function App() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  // TODO 1: Create an intervalRef typed as useRef<ReturnType<typeof setInterval> | null>(null)
  //         to hold the interval ID so it can be cleared from the stop handler.

  function handleStart(): void {
    if (isRunning) return;
    setIsRunning(true);
    // TODO 2: Assign setInterval to intervalRef.current so it increments elapsed every 100ms.
  }

  function handleStop(): void {
    // TODO 3: Call clearInterval(intervalRef.current) to stop the timer,
    //         reset intervalRef.current to null, and set isRunning to false.
    setIsRunning(false);
  }

  function handleLap(): void {
    setLaps(prev => [...prev, elapsed]);
  }

  function handleReset(): void {
    handleStop();
    setElapsed(0);
    setLaps([]);
  }

  const seconds = (elapsed / 10).toFixed(1);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Stopwatch</h1>
      <p style={{ fontSize: "3rem", fontFamily: "monospace" }}>{seconds}s</p>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handleStop}  disabled={!isRunning}>Stop</button>
        <button onClick={handleLap}   disabled={!isRunning}>Lap</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {laps.length > 0 && (
        <ol>{laps.map((lap, i) => <li key={i}>{(lap / 10).toFixed(1)}s</li>)}</ol>
      )}
    </div>
  );
}
