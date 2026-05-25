# Form Validation
> Module 02 · Lesson 03

## Learning Goals
- Use `useEffect` watching form state to recompute error messages on every change
- Display error messages conditionally below each field
- Derive the submit button's disabled state from whether any errors exist

## What's Happening
Validation logic lives in a `useEffect` that re-runs every time `form` changes. It checks each field, builds a new errors object, and calls `setErrors`. The button reads the errors object — if any value is truthy, the button is disabled. No extra `isValid` state needed.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. The form controls are already wired up.

## Hints

**Validation effect:**
```jsx
useEffect(() => {
  const newErrors = {};
  if (form.eventName.length < 5) newErrors.eventName = 'Must be at least 5 characters';
  // add more rules...
  setErrors(newErrors);
}, [form]);
```

**Conditional error display:**
```jsx
{errors.eventName && <p style={{ color: 'red' }}>{errors.eventName}</p>}
```

**Disabling the button:**
```jsx
disabled={Object.values(errors).some(Boolean)}
```

## Run It
```bash
npm install
npm run dev
```
