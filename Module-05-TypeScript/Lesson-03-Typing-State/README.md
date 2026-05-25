# Typing State
> Module 05 · Lesson 03

## Learning Goals
- Use `useState<T>()` to explicitly annotate state types
- Understand when TypeScript needs an explicit generic vs when it infers the type
- Use a union type like `string | null` for state that starts as `null`
- Annotate handler functions with `: void` return types

## What's Happening
TypeScript infers `useState(0)` as `number` automatically. But `useState(null)` is inferred as `null` — a type that can never hold a string. You must write `useState<string | null>(null)` so TypeScript knows the state can later become a string.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. After TODO 2, try calling `setLastMessage(42)` and observe the error.

## Hints

**Explicit generic:**
```ts
const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string | null>(null);
```

**When inference works (no generic needed):**
```ts
const [flag, setFlag] = useState(false); // inferred as boolean
```

**Void return type:**
```ts
function handleClick(): void {
  setCount(c => c + 1);
}
```

## Run It
```bash
npm install
npm run dev
```
