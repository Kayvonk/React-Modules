# useState Basics
> Module 01 · Lesson 01

## Learning Goals
- Declare state with `useState` and understand what it returns
- Recognize that calling the state setter triggers a re-render
- Derive values from state instead of storing them as separate state variables
- Reset state back to its initial value

## What's Happening
`useState(0)` returns an array: `[currentValue, setterFunction]`. When you call the setter, React re-runs your component function with the new value — the UI updates automatically. Tip and total don't need their own state because they can always be calculated from `subtotal`.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. The UI skeleton is already there.

## Hints

**Declaring state:**
```jsx
const [count, setCount] = useState(0);
```

**Updating state (add to current value):**
```jsx
setCount(count + 5);
```

**Derived value (compute, don't store):**
```jsx
const doubled = count * 2; // just a variable, not useState
```

Do not call `useState` for tip or total — compute them directly in the render body.

## Run It
```bash
npm install
npm run dev
```
