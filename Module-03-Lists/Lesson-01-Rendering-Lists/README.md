# Rendering Lists
> Module 03 · Lesson 01

## Learning Goals
- Use `Array.map()` to transform a data array into an array of JSX elements
- Provide a stable, unique `key` prop to each element in a mapped list
- Understand why React requires keys and what happens without them

## What's Happening
`Array.map()` returns a new array. When that array contains JSX elements, React renders all of them. The `key` prop is React's way of identifying which item is which so it can update only the changed ones during re-renders.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. The `BOOKS` data array is already defined.

## Hints

**Mapping to JSX:**
```jsx
{BOOKS.map(book => (
  <BookCard key={book.id} title={book.title} author={book.author} genre={book.genre} />
))}
```

**Key rules:** Keys must be unique among siblings. Use stable IDs from your data, not the array index (index keys cause bugs when items are removed or reordered — covered in the next lesson).

## Run It
```bash
npm install
npm run dev
```
