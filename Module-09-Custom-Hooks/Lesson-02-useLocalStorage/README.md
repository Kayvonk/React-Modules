# useLocalStorage
> Module 09 · Lesson 02

## Learning Goals
- Build a `useLocalStorage` hook that reads and writes to `localStorage` transparently
- Use generics (`<T>`) to make the hook work with any serializable value type
- Handle the cold-start case where the key doesn't exist in `localStorage` yet
- Verify persistence by refreshing the page and confirming values survive

## What's Happening
`localStorage` stores strings only. JSON serialization (`JSON.stringify`/`JSON.parse`) bridges the gap between JavaScript values and strings. The hook initializes from storage if the key exists, falls back to `initialValue` otherwise, and syncs to storage whenever the value changes.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. Define `useLocalStorage` above `App`, then swap out the three `useState` calls.

## Hints

**Hook skeleton:**
```tsx
function useLocalStorage<T>(key: string, initialValue: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

**Lazy initializer** (`() => ...` passed to useState) runs only once, preventing re-parsing on every render.

## Run It
```bash
npm install
npm run dev
```
