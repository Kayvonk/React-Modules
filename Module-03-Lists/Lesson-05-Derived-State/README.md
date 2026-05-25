# Derived State
> Module 03 · Lesson 05

## Learning Goals
- Compute summary values directly in the render body — no `useEffect` + extra `setState` needed
- Recognize when a value can be derived vs when it truly needs its own state
- See that derived values update automatically when source state changes

## What's Happening
When you remove a session, `sessions` state changes and React re-renders. Because `totalMinutes`, `totalCalories`, etc. are computed fresh each render from `sessions`, they're always correct with zero extra wiring. If they were stored in separate `useState` variables, you'd have to remember to keep them in sync — a common source of bugs.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. Remove sessions from the list and watch the stats update automatically.

## Hints

**reduce for totals:**
```jsx
const totalMinutes = sessions.reduce((sum, s) => sum + s.minutes, 0);
```

**Average (guard for empty array):**
```jsx
const avgDuration = sessions.length > 0 ? totalMinutes / sessions.length : 0;
```

**Longest session:**
```jsx
const longestSession = sessions.length > 0 ? Math.max(...sessions.map(s => s.minutes)) : 0;
```

## Run It
```bash
npm install
npm run dev
```
