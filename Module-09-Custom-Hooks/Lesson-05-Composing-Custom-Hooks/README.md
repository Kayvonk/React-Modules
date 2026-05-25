# Composing Custom Hooks
> Module 09 · Lesson 05

## Learning Goals
- Compose multiple custom hooks in one component to build complex behavior from simple parts
- Understand how `useDebounce` + `useFetch` + `useLocalStorage` layer without tangling
- Maintain a search history that is deduplicated, capped, and persisted across refreshes

## What's Happening
Each hook handles exactly one concern. `useDebounce` slows down the query. `useFetch` makes the network request. `useLocalStorage` persists history. The component itself only orchestrates them — it doesn't manage timers, network state, or storage directly. This is the composability payoff.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The three hooks are already included in the file — you're just wiring them together.

## Hints

**Adding to history (deduplicated, capped at 5):**
```tsx
useEffect(() => {
  if (debouncedQuery && movies.length > 0) {
    setHistory(prev => {
      const deduped = [debouncedQuery, ...prev.filter(h => h !== debouncedQuery)];
      return deduped.slice(0, 5);
    });
  }
}, [debouncedQuery, movies.length]);
```

**History display:**
```tsx
{history.length > 0 && (
  <div>
    <h3>Recent Searches</h3>
    <ul>{history.map(h => <li key={h}>{h}</li>)}</ul>
    <button onClick={() => setHistory([])}>Clear history</button>
  </div>
)}
```

## Run It
```bash
npm install
npm run dev
```
