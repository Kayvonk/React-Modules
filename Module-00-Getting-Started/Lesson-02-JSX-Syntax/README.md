# JSX Syntax
> Module 00 · Lesson 02

## Learning Goals
- Embed JavaScript expressions inside JSX using curly braces `{}`
- Use `className` instead of `class` for CSS class attributes
- Write conditional output with a ternary operator inside JSX

## What's Happening
JSX is compiled by Vite/Babel into regular JavaScript function calls. The `{}` syntax tells the compiler "evaluate this as JavaScript, not HTML text." Attributes follow JavaScript rules, so HTML's `class` becomes `className` (since `class` is a reserved word in JS).

## Your Task
Open `src/App.jsx` and complete the 3 TODOs. The app intentionally has a bug — find and fix it as part of TODO 1.

## Hints

**Ternary in JSX:**
```jsx
<p>{score > 50 ? "Pass" : "Fail"}</p>
```

**Embedding a variable:**
```jsx
const name = "Alice";
<h1>{name}</h1>
```

The full corrected component is not shown here — use the hints above to reason through each TODO.

## Run It
```bash
npm install
npm run dev
```
