# Typing Props
> Module 05 · Lesson 02

## Learning Goals
- Define a component's expected props using a TypeScript `interface`
- Annotate the function parameter with the interface type
- Add optional props with the `?` operator
- Observe TypeScript errors when passing the wrong prop type

## What's Happening
An `interface` is a TypeScript-only construct that describes the shape of an object. When you annotate a component's props parameter, TypeScript checks every `<ProductCard />` usage against the interface — wrong type, missing required prop, or unknown prop all become editor errors instantly.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. After adding the interface, try passing `price="free"` to one of the cards and observe the error.

## Hints

**Interface:**
```ts
interface CardProps {
  title: string;
  count: number;
  subtitle?: string; // optional
}
```

**Annotating the component:**
```tsx
function Card({ title, count, subtitle }: CardProps) {
  ...
}
```

Notice that once typed, TypeScript knows `subtitle` could be `undefined` — you may want `{subtitle ?? ''}` to safely render it.

## Run It
```bash
npm install
npm run dev
```
