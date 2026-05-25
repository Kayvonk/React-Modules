# Conditional Rendering
> Module 01 · Lesson 03

## Learning Goals
- Render different UI based on state using the ternary operator
- Show or hide elements with the `&&` short-circuit operator
- Combine multiple conditions cleanly without deeply nesting ternaries

## What's Happening
JSX accepts any JavaScript expression inside `{}`. A ternary (`condition ? a : b`) evaluates to one of two values, so you can use it to pick between two JSX elements. `&&` evaluates to the right-hand side when the condition is truthy — if it's falsy, React renders nothing.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. The three status buttons are already wired up.

## Hints

**Ternary for background color:**
```jsx
background: status === 'on-time' ? 'green' : status === 'delayed' ? 'yellow' : 'red'
```

**&& for optional content:**
```jsx
{status === 'cancelled' && <a href="#">Contact support</a>}
```

**Falsy-zero pitfall:** `{count && <p>...</p>}` renders `0` when count is 0. Use `{count > 0 && ...}` to be safe. (Not an issue here, just worth knowing.)

## Run It
```bash
npm install
npm run dev
```
