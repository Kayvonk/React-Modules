// LESSON: When to Optimize
// Optimization has a cost: complexity. Profile first with console.log to confirm
// a problem exists before reaching for React.memo, useMemo, or useCallback.

import { useState, useEffect, useMemo, useCallback, memo } from 'react';

// ── ClockWidget: updates every second (intentionally frequent) ─
function ClockWidget() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(id);
  }, []);
  return <div style={{ padding: "0.75rem", background: "#f0f0f0", borderRadius: "4px" }}>🕐 {time}</div>;
}

// ── StatsWidget: receives static data, no need to re-render ───
// TODO 1: Wrap StatsWidget in React.memo so it stops re-rendering when ClockWidget ticks.
//         Add a console.log inside to confirm.
function StatsWidget({ views, sales }: { views: number; sales: number }) {
  console.log('StatsWidget rendered');
  return (
    <div style={{ padding: "0.75rem", background: "#e8f5e9", borderRadius: "4px" }}>
      <strong>Views:</strong> {views} &nbsp; <strong>Sales:</strong> {sales}
    </div>
  );
}

// ── ChartWidget: receives a callback prop ─────────────────────
// TODO 3: Wrap ChartWidget in React.memo so it can benefit from a stable callback.
function ChartWidget({ onDataPoint }: { onDataPoint: () => void }) {
  console.log('ChartWidget rendered');
  return (
    <div style={{ padding: "0.75rem", background: "#fff3e0", borderRadius: "4px" }}>
      <button onClick={onDataPoint}>Record Data Point</button>
    </div>
  );
}

export default function App() {
  const [dataPoints, setDataPoints] = useState(0);

  // TODO 2: Try wrapping a trivial computation (like views * 2) in useMemo.
  //         Notice that the code becomes more complex without any real benefit.
  //         Discuss: when is useMemo worth it?
  const views = 1240;
  const sales = 87;

  // TODO 3 (continued): Wrap handleDataPoint in useCallback so ChartWidget
  //                      doesn't re-render when ClockWidget ticks.
  function handleDataPoint(): void {
    setDataPoints(d => d + 1);
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Dashboard</h1>
      <p>Data points recorded: {dataPoints}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <ClockWidget />
        <StatsWidget views={views} sales={sales} />
        <ChartWidget onDataPoint={handleDataPoint} />
      </div>
    </div>
  );
}
