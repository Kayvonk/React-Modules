# useFetch
> Module 09 · Lesson 04

## Learning Goals
- Build a `useFetch<T>` hook encapsulating loading, error, and data state
- Implement `AbortController` cleanup so requests are cancelled when the URL changes
- Use a generic type parameter so callers get typed data without casting
- Consume the hook in a component and render all three states correctly

## What's Happening
The three-state pattern (loading/error/data) appears in every data-fetching component. Extracting it into `useFetch` means writing it once and using it everywhere. The generic `<T>` makes the hook flexible — `useFetch<ApodData>` returns `data` typed as `ApodData | null`.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. Define `useFetch` above `App`, then replace the inline fetch logic with a hook call.

## Hints

**Hook signature:**
```tsx
function useFetch<T>(url: string): { data: T | null; isLoading: boolean; error: string | null } {
  const [data, setData] = useState<T | null>(null);
  // ... loading, error state, useEffect with AbortController
  return { data, isLoading, error };
}
```

**After TODO 3:** The `useEffect` and the three `useState` calls inside `App` should be gone — replaced by one line: `const { data, isLoading, error } = useFetch<ApodData>(APOD_URL);`

## Run It
```bash
npm install
npm run dev
```
