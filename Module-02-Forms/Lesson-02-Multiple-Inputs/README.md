# Multiple Inputs
> Module 02 · Lesson 02

## Learning Goals
- Manage multiple form fields with a single state object
- Use the computed property name pattern to handle all inputs with one `onChange`
- Display a live summary derived from the form state object

## What's Happening
Instead of four separate `useState` calls, one object holds all fields. The `name` attribute on each input matches a key in the state object. A single `handleChange` uses `e.target.name` and a computed property (`[e.target.name]`) to update only the field that changed.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. Note that the inputs don't have `value` or `onChange` yet — add both after writing the handler.

## Hints

**Single handler with computed property name:**
```jsx
function handleChange(e) {
  setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
}
```

**Each input gets value and onChange:**
```jsx
<input name="guestName" value={form.guestName} onChange={handleChange} />
```

**Live summary:**
```jsx
<p>Guest: {form.guestName || '—'}</p>
```

## Run It
```bash
npm install
npm run dev
```
