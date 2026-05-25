# Your First Component
> Module 00 · Lesson 03

## Learning Goals
- Define a React functional component as a JavaScript function that returns JSX
- Understand that component names must start with a capital letter
- Render a component using JSX tag syntax (not as a function call)
- Ensure every component returns a single root element

## What's Happening
When React sees `<MenuItem />` in JSX, it calls the `MenuItem` function and uses whatever JSX it returns. This is how you build UIs out of reusable pieces — one component per "thing" in the interface.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. You'll write a `MenuItem` component and use it multiple times in `App`.

## Hints

**Defining a component that accepts props:**
```jsx
function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}
```
Or with destructuring:
```jsx
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}
```

**Using it:**
```jsx
<Greeting name="Alice" />
<Greeting name="Bob" />
```

**Single root rule:** If you return multiple sibling elements, wrap them in a `<div>` or an empty `<>` fragment — JSX can only return one root element per component.

## Run It
```bash
npm install
npm run dev
```
