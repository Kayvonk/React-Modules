# What Is a Custom Hook
> Module 09 · Lesson 01

## Learning Goals
- Define a custom hook as a function whose name starts with `use` and calls other hooks
- Extract duplicated stateful logic into one hook and consume it from multiple components
- Confirm that each component calling the same hook gets its own isolated state

## What's Happening
`DownloadProgress` and `RatingPicker` have identical counter logic — only the limits differ. A custom hook extracts that logic once. Each component that calls `useCounter` gets its own independent `count` — hooks don't share state, they share behavior.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. Define `useCounter` above the component definitions, then replace the duplicated code inside each component.

## Hints

**Custom hook shape:**
```tsx
function useCounter(initialValue: number, max: number) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => Math.min(max, c + 1));
  const decrement = () => setCount(c => Math.max(initialValue, c - 1));
  const reset     = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}
```

**Consuming it:**
```tsx
const { count, increment, decrement, reset } = useCounter(0, 100);
```

## Run It
```bash
npm install
npm run dev
```
