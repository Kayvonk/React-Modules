# Prop Drilling
> Module 01 · Lesson 05

## Learning Goals
- Pass props through multiple component levels to reach a deeply nested consumer
- Recognize that intermediate components must receive and forward props they don't use
- Understand why prop drilling becomes painful at scale (motivation for Context in Module 06)

## What's Happening
`tableNumber` lives in `App`. `TableBadge` needs it. But `OrderSection` sits in between — it has to accept `tableNumber` as a prop just to hand it to `TableBadge`, even though `OrderSection` itself never uses it. This is prop drilling: data passes through layers that don't care about it.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. Work top-down: pass the prop from App → OrderSection → TableBadge.

## Hints

**Passing a prop:**
```jsx
<Child value={myValue} />
```

**Accepting and forwarding in the middle:**
```jsx
function Middle({ value }) {
  return <Bottom value={value} />;
}
```

After completing the TODOs, try adding a `console.log` inside `OrderSection` to confirm it re-renders every time `tableNumber` changes — even though it doesn't display the value.

## Run It
```bash
npm install
npm run dev
```
