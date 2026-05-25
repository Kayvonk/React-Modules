# Sorting Lists
> Module 03 · Lesson 04

## Learning Goals
- Sort a list derived from state using `Array.sort()` without mutating the original
- Drive sort order dynamically from a state variable
- Display rank numbers based on position in the sorted result

## What's Happening
`Array.sort()` mutates the array it's called on. Spreading first (`[...PLAYERS].sort(...)`) creates a copy that gets sorted, leaving `PLAYERS` unchanged. The sort key in state tells the comparator which field to compare — changing the key triggers a re-render with the new order.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. Replace the static list with your sorted derivation.

## Hints

**Spread + sort:**
```jsx
const sortedPlayers = [...PLAYERS].sort((a, b) => {
  if (sortKey === 'name') return a.name.localeCompare(b.name);
  return b[sortKey] - a[sortKey]; // descending for numbers
});
```

**Rank from index:**
```jsx
{sortedPlayers.map((p, i) => (
  <li key={p.id}>#{i + 1} {p.name}</li>
))}
```

## Run It
```bash
npm install
npm run dev
```
