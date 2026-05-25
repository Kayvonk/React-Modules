# useMemo
> Module 08 · Lesson 03

## Learning Goals
- Wrap an expensive computation in `useMemo` to avoid re-running it on every render
- Set the dependency array so the memo recomputes only when relevant values change
- Verify the memo works by logging inside the computation function

## What's Happening
Every re-render re-runs the component function top to bottom. Without `useMemo`, the ingredient scaling runs even when the unrelated counter changes. With `useMemo`, React skips the computation and returns the cached result — only re-computing when `targetServings` changes.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. Click the "Increment" button before and after adding `useMemo` and observe the console.

## Hints

**useMemo syntax:**
```tsx
const scaledIngredients = useMemo(() => {
  console.log('Computing scaled ingredients');
  return RECIPE.map(ing => ({
    ...ing,
    amount: +(ing.amount * targetServings / BASE_SERVINGS).toFixed(2),
  }));
}, [targetServings]);
```

**When NOT to use useMemo:** For simple calculations (addition, string concatenation), the overhead of useMemo exceeds the cost of just recomputing. Only memoize genuinely expensive work.

## Run It
```bash
npm install
npm run dev
```
