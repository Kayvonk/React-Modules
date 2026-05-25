# Controlled Inputs
> Module 02 · Lesson 01

## Learning Goals
- Understand the difference between a controlled and an uncontrolled input
- Wire a `value` prop and `onChange` handler so React owns the input's value
- Derive display values from state rather than storing extra state variables

## What's Happening
An uncontrolled input stores its own value in the DOM. A controlled input has its value driven by React state — the input only shows what state says, and `onChange` updates state on every keystroke. This means React is always the source of truth.

## Your Task
Complete the 3 TODOs in `src/App.jsx`.

## Hints

**Wiring a controlled input:**
```jsx
const [text, setText] = useState('');
<input value={text} onChange={(e) => setText(e.target.value)} />
```

**Deriving a display value (do not use useState for this):**
```jsx
<p>Preview: {text.toUpperCase()}</p>
```

Also update the `disabled` prop on the Apply button so it's only disabled when `code` is empty.

## Run It
```bash
npm install
npm run dev
```
