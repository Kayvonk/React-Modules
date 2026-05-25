# Async/Await in useEffect
> Module 07 · Lesson 03

## Learning Goals
- Use `async/await` inside `useEffect` by wrapping it in an inner async function
- Apply `try/catch/finally` for error and loading state management
- Understand why the `useEffect` callback itself cannot be `async`

## What's Happening
React expects `useEffect` to return either nothing or a cleanup function. An `async` function implicitly returns a Promise — which React doesn't know how to handle as a cleanup. The fix: declare an `async` function inside the effect and call it immediately. The effect itself stays synchronous.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The loading/error UI and launch display are already written.

## Hints

**Inner async function pattern:**
```tsx
useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setState(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }
  fetchData();
}, []);
```

Remove the `setIsLoading(false)` stub line once your implementation is in place.

## Run It
```bash
npm install
npm run dev
```
