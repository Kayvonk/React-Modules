# NavLink and useNavigate
> Module 04 · Lesson 02

## Learning Goals
- Use `NavLink` to apply active styles to the currently matched navigation link
- Use the `className` or `style` prop (as a function) receiving `{ isActive }`
- Use `useNavigate` to navigate programmatically without a link click
- Navigate backwards with `navigate(-1)`

## What's Happening
`NavLink` is a `Link` that knows whether its `to` path matches the current URL. It passes `{ isActive }` to any function you pass as `className` or `style`. `useNavigate` returns a function you can call anywhere — useful for post-submit redirects or back buttons.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. Note: `<NavLink>` is already used — update the `style` prop to use the `isActive` callback for TODOs 1 and 2.

## Hints

**Active style via function:**
```jsx
<NavLink
  to="/recipes"
  style={({ isActive }) => ({
    color: "white",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none",
  })}
>
  Recipes
</NavLink>
```

**Back button:**
```jsx
const navigate = useNavigate();
<button onClick={() => navigate(-1)}>← Back</button>
```

## Run It
```bash
npm install
npm run dev
```
