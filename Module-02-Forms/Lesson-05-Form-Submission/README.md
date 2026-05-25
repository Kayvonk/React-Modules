# Form Submission
> Module 02 · Lesson 05

## Learning Goals
- Prevent the browser's default form submission behavior with `e.preventDefault()`
- Transition the UI from a form view to a confirmation view after submission
- Reset all form state so the user can submit again

## What's Happening
By default, submitting an HTML form causes a page reload (GET or POST request). `e.preventDefault()` stops that. Then you control what happens next entirely in React — switch views, show a success message, redirect, etc.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. The form controls and state are already wired.

## Hints

**handleSubmit skeleton:**
```jsx
function handleSubmit(e) {
  e.preventDefault();
  setSubmitted(true);
}
```

**Connect it to the form:**
```jsx
<form onSubmit={handleSubmit}>
```

**Conditional view switching:**
```jsx
if (submitted) {
  return (
    <div>
      <p>Thanks, {form.name}!</p>
      <button onClick={() => { setForm(INITIAL_FORM); setSubmitted(false); }}>
        Apply for Another Role
      </button>
    </div>
  );
}
```

## Run It
```bash
npm install
npm run dev
```
