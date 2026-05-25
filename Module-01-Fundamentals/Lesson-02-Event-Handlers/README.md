# Event Handlers
> Module 01 · Lesson 02

## Learning Goals
- Attach event handlers to JSX elements using `onClick` and similar props
- Pass data to a handler using an inline arrow function wrapper
- Conditionally show UI based on whether a value has been selected

## What's Happening
`onClick` expects a function reference — it calls that function when the user clicks. When you write `onClick={() => doSomething(value)}`, the arrow creates a new function that captures `value` from the surrounding scope and calls `doSomething` with it.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. The color array and button layout are already written.

## Hints

**Passing data via inline arrow:**
```jsx
<button onClick={() => setSelected(item)}>Click</button>
```

**Conditional rendering with &&:**
```jsx
{selected && <p>You picked: {selected.name}</p>}
```

**Inline style using a variable:**
```jsx
<div style={{ background: selected.hex, width: 100, height: 100 }} />
```

## Run It
```bash
npm install
npm run dev
```
