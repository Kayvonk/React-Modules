# When to Optimize
> Module 08 · Lesson 05

## Learning Goals
- Profile component re-renders with `console.log` to confirm where optimization is needed
- Apply `React.memo` only to components that re-render unnecessarily
- Recognize when `useMemo` adds complexity without meaningful benefit
- Follow the rule: measure first, optimize second

## What's Happening
`ClockWidget` re-renders every second. Without memoization, that triggers `StatsWidget` and `ChartWidget` to re-render too — even though their props haven't changed. `React.memo` + `useCallback` stops this cascade. But wrapping a simple `views * 2` computation in `useMemo` just adds noise — the optimization cost exceeds the benefit.

## Your Task
Complete the 3 TODOs in `src/App.tsx` and observe the console after each change.

## Hints

**React.memo:**
```tsx
const StatsWidget = memo(function StatsWidget({ views, sales }: ...) { ... });
```

**When useMemo helps:** Only when the computation is genuinely expensive (sorting thousands of items, complex math) and the component re-renders frequently due to unrelated state changes.

**When useCallback helps:** Only when the receiving component is wrapped in `React.memo` — otherwise the stable reference has no observer.

## Run It
```bash
npm install
npm run dev
```
