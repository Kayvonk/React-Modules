# Why Context?
> Module 06 · Lesson 01

## Learning Goals
- Pass props through multiple component levels to a deeply nested consumer
- Observe that intermediate components re-render even when they don't use the prop
- Understand why deep prop drilling becomes painful at scale

## What's Happening
`destination` lives in `App`. `DestinationBadge` needs it. `ItinerarySection` sits in between and re-renders on every `destination` change — even though it never uses the value. In a large app with many layers and many pieces of shared data, this becomes a maintenance nightmare. Context (next lesson) is the solution.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. Open the browser DevTools console and watch both components log on every button click.

## Hints
**Prop passing reminder:**
```tsx
// Parent:
<Child value={destination} />
// Child:
function Child({ value }: { value: string }) { ... }
```

After completing this lesson, think about: "What if there were 5 levels instead of 2? What if 10 different components needed `destination`?"

## Run It
```bash
npm install
npm run dev
```
