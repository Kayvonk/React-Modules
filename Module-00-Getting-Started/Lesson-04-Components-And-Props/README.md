# Components and Props
> Module 00 · Lesson 04

## Learning Goals
- Pass data into a component using props
- Destructure props directly in the function signature
- Render different output from the same component by passing different prop values
- Provide a default value for an optional prop

## What's Happening
Props flow one direction: from parent to child. `App` passes `title`, `year`, and `genre` to each `MovieCard`. The card uses those values to render its content — the same component function, different output each time.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. The `MovieCard` component and its usage are already written — you just need to make it work.

## Hints

**Destructuring props:**
```jsx
function Card({ name, score }) {
  return <p>{name}: {score}</p>;
}
```

**Default prop value:**
```jsx
function Card({ name, score = 0 }) {
  // score defaults to 0 if not passed
}
```

Notice one `<MovieCard />` at the bottom doesn't include `genre` — your default value will cover it.

## Run It
```bash
npm install
npm run dev
```
