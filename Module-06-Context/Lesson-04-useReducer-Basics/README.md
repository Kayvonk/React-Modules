# useReducer Basics
> Module 06 · Lesson 04

## Learning Goals
- Write a reducer function that handles each action case and returns new state
- Call `useReducer(reducer, initialState)` and dispatch actions from the UI
- Understand why `useReducer` is preferable to multiple `useState` calls for related state

## What's Happening
`useReducer` works like `useState` but separates *how state changes* from *when state changes*. The UI dispatches an action (what happened); the reducer decides the new state (what changes). All state transitions live in one place, making them easy to test and reason about.

## Your Task
Complete the 3 TODO cases inside `bankReducer` in `src/App.tsx`. The state shape, action types, and dispatch calls are already written.

## Hints

**Returning new state (never mutate):**
```ts
case 'DEPOSIT':
  return {
    balance: state.balance + action.amount,
    history: [...state.history, `+ $${action.amount.toFixed(2)} deposited`],
  };
```

**Guard for withdrawals:**
```ts
const newBalance = Math.max(0, state.balance - action.amount);
```

**Interest calculation:**
```ts
const newBalance = +(state.balance * 1.05).toFixed(2);
```

## Run It
```bash
npm install
npm run dev
```
