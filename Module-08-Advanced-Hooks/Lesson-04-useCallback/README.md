# useCallback
> Module 08 · Lesson 04

## Learning Goals
- Understand why a new function reference is created on every render
- Use `useCallback` to memoize a callback so its reference stays stable
- Observe that `React.memo` only prevents re-renders when props don't change
- Combine `React.memo` + `useCallback` to prevent unnecessary child re-renders

## What's Happening
`React.memo` skips re-rendering if all props are equal (by reference). But every render creates a new `handleDelete` function — so from React.memo's perspective, `onDelete` changed. `useCallback` returns the same function reference between renders (until its dependencies change), so `React.memo` can finally skip the child render.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The console.log in `NoteList` is your measurement tool.

## Hints

**useCallback:**
```tsx
const handleDelete = useCallback((id: string): void => {
  setNotes(prev => prev.filter(n => n.id !== id));
}, []); // empty [] works when using the functional updater form
```

Note: using `prev =>` in `setNotes` means you don't need `notes` in the dependency array — the updater always receives the latest value.

## Run It
```bash
npm install
npm run dev
```
