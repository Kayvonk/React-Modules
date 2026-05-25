// LESSON: useLocalStorage
// Build a hook that reads from and writes to localStorage transparently —
// so it works as a drop-in replacement for useState.

import { useState, useEffect } from 'react';

// TODO 1: Create a useLocalStorage<T>(key: string, initialValue: T) hook that:
//         - reads from localStorage on initialization (parse JSON, fall back to initialValue if missing)
//         - returns [storedValue, setValue] just like useState

// TODO 2: Inside the hook, add a useEffect that writes to localStorage whenever
//         the value changes: localStorage.setItem(key, JSON.stringify(value))

// TODO 3: Replace the three useState calls below with useLocalStorage calls
//         using keys like 'pref-theme', 'pref-fontSize', 'pref-language'.
//         Refresh the page and verify your selections persist.

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [fontSize, setFontSize] = useState<number>(16);
  const [language, setLanguage] = useState<string>('en');

  return (
    <div style={{ padding: "2rem", maxWidth: "360px", fontSize: `${fontSize}px` }}>
      <h1>Preferences</h1>
      <p style={{ color: "#888" }}>Change settings, then refresh — they should persist.</p>

      <div style={{ marginBottom: "0.75rem" }}>
        <label>Theme: </label>
        <select value={theme} onChange={e => setTheme(e.target.value as 'light' | 'dark')}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div style={{ marginBottom: "0.75rem" }}>
        <label>Font Size: {fontSize}px </label>
        <input type="range" min={12} max={24} value={fontSize}
          onChange={e => setFontSize(Number(e.target.value))} />
      </div>

      <div style={{ marginBottom: "0.75rem" }}>
        <label>Language: </label>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </div>
  );
}
