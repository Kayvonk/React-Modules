# useDebounce
> Module 09 · Lesson 03

## Learning Goals
- Build a `useDebounce<T>` hook that delays propagating a value until input pauses
- Use `setTimeout` + `clearTimeout` cleanup in `useEffect` to implement debounce
- Distinguish between the raw (immediate) input value and the debounced (delayed) value
- Apply the debounced value to filter/search to avoid running work on every keystroke

## What's Happening
Every time `value` changes (every keystroke), the effect's cleanup runs first — cancelling the previous timeout. A new 300ms timeout starts. If the user stops typing for 300ms, the timeout fires and `debouncedValue` updates. This means the filter only runs after a natural pause, not on every letter.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. Define `useDebounce` above the component, then swap the filter dependency.

## Hints

**useDebounce hook:**
```tsx
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
```

**Using it:**
```tsx
const debouncedQuery = useDebounce(query, 300);
const filtered = PRODUCTS.filter(p => p.toLowerCase().includes(debouncedQuery.toLowerCase()));
```

## Run It
```bash
npm install
npm run dev
```
