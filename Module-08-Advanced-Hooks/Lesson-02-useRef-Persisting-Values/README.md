# useRef — Persisting Values
> Module 08 · Lesson 02

## Learning Goals
- Store a mutable value in a ref that persists across renders without triggering re-renders
- Use a ref to hold a timer ID so it can be cleared from a different handler
- Understand the difference between a ref and state for values you don't display

## What's Happening
If you stored the interval ID in state, setting it would trigger a re-render. If you stored it in a plain variable, it would reset every render. A ref persists across renders without causing them — the right choice for values that affect behavior but not the UI.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The UI and lap/reset logic are already in place.

## Hints

**Interval ref:**
```tsx
const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
```

**Start:**
```tsx
intervalRef.current = setInterval(() => setElapsed(e => e + 1), 100);
```

**Stop:**
```tsx
if (intervalRef.current !== null) {
  clearInterval(intervalRef.current);
  intervalRef.current = null;
}
```

## Run It
```bash
npm install
npm run dev
```
