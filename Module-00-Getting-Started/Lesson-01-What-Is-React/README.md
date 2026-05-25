# What Is React?
> Module 00 · Lesson 01

## Learning Goals
- Understand that a React component is a JavaScript function that returns JSX
- Recognize that JSX looks like HTML but lives inside a `.jsx` file
- See how React turns your component into real HTML rendered in the browser

## What's Happening
When you run `npm run dev`, Vite compiles your JSX and React renders the `App` component into the `<div id="root">` in `index.html`. Every time you save a change, the browser updates instantly — that's Vite's hot reload working alongside React.

## Your Task
Open `src/App.jsx` and complete the 3 TODOs inside the file.

## Hint
A JSX list looks like this — each item is its own `<li>` tag inside a `<ul>`:

```jsx
<ul>
  <li>First song</li>
  <li>Second song</li>
</ul>
```

Update the number in the `<p>` tag yourself — React isn't counting for you yet (that comes in Module 01).

## Run It
```bash
npm install
npm run dev
```
