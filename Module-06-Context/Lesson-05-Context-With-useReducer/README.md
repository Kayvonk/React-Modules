# Context with useReducer
> Module 06 · Lesson 05

## Learning Goals
- Combine Context and `useReducer` to share complex state across the component tree
- Export both `state` and `dispatch` through a single context object
- Build producer and consumer components that are decoupled from each other

## What's Happening
`BoardProvider` owns the reducer. Any descendant that calls `useContext(BoardContext)` gets both state to read and dispatch to send actions. `Column` and `AddTaskForm` never pass props to each other — they're completely decoupled, yet they share the same board state.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The reducer and action types are already fully implemented.

## Hints

**Completing BoardProvider:**
```tsx
const [state, dispatch] = useReducer(boardReducer, INITIAL);
return <BoardContext.Provider value={{ state, dispatch }}>{children}</BoardContext.Provider>;
```

**Consuming in Column:**
```tsx
const { state, dispatch } = useContext(BoardContext);
const tasks = state.tasks.filter(t => t.status === status);
```

**Dispatching from a select:**
```tsx
<select onChange={e => dispatch({ type: 'MOVE_TASK', id: task.id, status: e.target.value as TaskStatus })}>
```

## Run It
```bash
npm install
npm run dev
```
