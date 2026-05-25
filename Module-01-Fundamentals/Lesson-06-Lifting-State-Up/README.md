# Lifting State Up
> Module 01 · Lesson 06

## Learning Goals
- Identify when two sibling components need to share state
- Move shared state to the closest common parent
- Pass state down as props and the setter down as a callback prop
- Keep siblings in sync through a single source of truth

## What's Happening
`CelsiusInput` and `FahrenheitInput` are siblings — neither can read the other's state. By lifting `celsius` into their parent (`App`), both components read from and write to the same variable. Typing in Fahrenheit converts back to Celsius and updates the shared state, which flows down to both inputs.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. The two input components are already written and accept the right props — you just need to wire up the parent.

## Hints

**Conversions:**
- °C → °F: `celsius * 9/5 + 32`
- °F → °C: `(fahrenheit - 32) * 5/9`

**Callback prop pattern:**
```jsx
// Parent:
<Child value={x} onChange={setX} />

// Child:
function Child({ value, onChange }) {
  return <input value={value} onChange={e => onChange(Number(e.target.value))} />;
}
```

## Run It
```bash
npm install
npm run dev
```
