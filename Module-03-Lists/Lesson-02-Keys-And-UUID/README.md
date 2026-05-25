# Keys and UUID
> Module 03 · Lesson 02

## Learning Goals
- Understand why array-index keys cause bugs when items are removed from the middle of a list
- Generate stable, unique IDs with `crypto.randomUUID()` at item-creation time
- Observe the difference between index-keyed and UUID-keyed behavior when deleting items

## What's Happening
React uses `key` to match rendered elements to list items between renders. If you use the index as a key, removing item #1 shifts all remaining indices — React thinks every item changed and may destroy and recreate unrelated DOM nodes, breaking things like input focus or animations.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. `crypto.randomUUID()` is built into modern browsers — no import needed.

## Hints

**Adding with a stable ID:**
```jsx
const newItem = { id: crypto.randomUUID(), name: input };
setItems(prev => [...prev, newItem]);
```

**Removing by ID:**
```jsx
setItems(prev => prev.filter(item => item.id !== targetId));
```

**Experiment:** After completing the TODOs, try changing `item.id` to the array index (`items.indexOf(item)`) as the key and notice how removing a middle item behaves differently. Then switch back.

## Run It
```bash
npm install
npm run dev
```
