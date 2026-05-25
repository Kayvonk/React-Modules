# useEffect Basics
> Module 01 · Lesson 04

## Learning Goals
- Run a side effect after render using `useEffect`
- Return a cleanup function to stop ongoing work when the component unmounts
- Understand the three dependency array forms: no array, `[]`, and `[dep]`
- Avoid the infinite loop caused by updating state inside an effect with no dependency guard

## What's Happening
`useEffect` runs after every render by default. The dependency array controls when it re-runs: `[]` means "only on mount," `[dep]` means "on mount and whenever dep changes." The cleanup function (returned from the effect) runs before the next effect fires and when the component unmounts.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. The quotes array and display are already in place.

## Hints

**setInterval that updates index:**
```jsx
useEffect(() => {
  const id = setInterval(() => {
    setIndex(prev => (prev + 1) % QUOTES.length);
  }, 3000);
  return () => clearInterval(id); // cleanup
}, []);
```
(The full solution above is shown because the cleanup pattern is the core concept — the real exercise is understanding *why* each piece is there.)

**Dependency array experiment:** Change `[]` to `[index]` and observe that the interval resets on every quote change. Then switch back.

## Run It
```bash
npm install
npm run dev
```
