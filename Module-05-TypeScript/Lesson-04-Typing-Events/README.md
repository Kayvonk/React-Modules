# Typing Events
> Module 05 · Lesson 04

## Learning Goals
- Type `onChange` handlers with `React.ChangeEvent<HTMLInputElement>`
- Type `onClick` handlers with `React.MouseEvent<HTMLButtonElement>`
- Understand why the generic element type (`HTMLInputElement`) matters for `e.target`

## What's Happening
React's event types are generic — `React.ChangeEvent<T>` means "a change event on element of type T." The generic determines what properties `e.target` has. `HTMLInputElement` gives you `.value`; `HTMLButtonElement` gives you `.disabled`; without the generic, TypeScript doesn't know.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The phone formatter logic is already written.

## Hints

**onChange handler type:**
```ts
function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
  const value = e.target.value; // TypeScript knows this is string
}
```

**onClick handler type:**
```ts
function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
  e.currentTarget.blur(); // TypeScript knows this is HTMLButtonElement
}
```

**Shorthand alternative for onClick:**
```ts
const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => { ... };
```

## Run It
```bash
npm install
npm run dev
```
