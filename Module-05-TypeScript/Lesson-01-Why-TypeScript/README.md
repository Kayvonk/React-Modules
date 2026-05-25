# Why TypeScript?
> Module 05 · Lesson 01

## Learning Goals
- Add type annotations to function parameters and return types
- Observe that TypeScript catches type errors before the code runs
- Understand that type annotations are erased at runtime — they don't change behavior

## What's Happening
TypeScript is JavaScript with type annotations. Vite compiles `.tsx` files just like `.jsx` — the annotations disappear at build time. Their value is entirely in the editor and compiler: red underlines appear when you pass the wrong type, before you ever refresh the browser.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. Intentionally break a type after each TODO to see the error message, then fix it.

## Hints

**Function parameter and return types:**
```ts
function add(a: number, b: number): number {
  return a + b;
}
```

**Variable type annotation:**
```ts
const score: number = 42;
score = "high"; // TypeScript error!
```

**Where to see errors:** Look at the red underlines in your editor (VS Code), or run `npx tsc --noEmit` in the terminal.

## Run It
```bash
npm install
npm run dev
```
