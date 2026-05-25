# Cleanup Functions
> Module 07 · Lesson 05

## Learning Goals
- Create an `AbortController` and pass its `signal` to `fetch()` to make the request cancellable
- Return a cleanup function from `useEffect` that calls `controller.abort()`
- Distinguish an `AbortError` from a real network error in the `catch` block
- Understand when stale state updates become a problem and how cleanup prevents them

## What's Happening
When `selectedCoin` changes quickly, the previous fetch might still be in flight. Without `AbortController`, both fetches can complete and the slower one might update state last — showing the wrong coin's data. The cleanup function aborts the previous request before the new one starts.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The fetch call structure is already in place.

## Hints

**AbortController:**
```tsx
const controller = new AbortController();
fetch(url, { signal: controller.signal })
  .then(...)
  .catch(err => {
    if (err.name === 'AbortError') return; // not a real error
    setError(err.message);
  });
return () => controller.abort();
```

**Why this matters:** Switch coins rapidly — without AbortController you might see the price from the previously-selected coin appear briefly.

## Run It
```bash
npm install
npm run dev
```
