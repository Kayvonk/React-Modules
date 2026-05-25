# Typing Arrays and Objects
> Module 05 · Lesson 05

## Learning Goals
- Define a custom object type with a union type field
- Annotate array state with `useState<YourType[]>([])`
- Use `Record<K, V>` for key-value objects with known value types
- Understand that union types restrict a field to specific allowed values

## What's Happening
A union type like `'general' | 'vip' | 'speaker'` means TypeScript will error if you try to assign any other string — a misspelling becomes a compile error instead of a silent runtime bug. `Record<string, number>` is shorthand for "an object whose keys are strings and values are numbers."

## Your Task
Complete the 3 TODOs in `src/App.tsx`. Start by tightening the union type in the existing interface.

## Hints

**Union type field:**
```ts
interface Person {
  role: 'admin' | 'user' | 'guest';
}
```

**Counting with reduce:**
```ts
const counts: Record<string, number> = attendees.reduce((acc, a) => {
  acc[a.ticketType] = (acc[a.ticketType] ?? 0) + 1;
  return acc;
}, {} as Record<string, number>);
```

**Rendering Record entries:**
```tsx
{Object.entries(counts).map(([type, n]) => (
  <p key={type}>{type}: {n}</p>
))}
```

## Run It
```bash
npm install
npm run dev
```
