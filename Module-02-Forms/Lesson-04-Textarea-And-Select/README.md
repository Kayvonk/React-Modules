# Textarea and Select
> Module 02 · Lesson 04

## Learning Goals
- Control a `<textarea>` element with `value` and `onChange`
- Control a `<select>` element with `value` and `onChange`
- Derive computed display values (word count) from textarea state
- Change UI dynamically based on the selected option

## What's Happening
React controls `<textarea>` and `<select>` the same way it controls `<input>`: via the `value` prop and `onChange`. Unlike raw HTML, React's `<textarea>` uses a `value` prop instead of children.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. Also update the priority badge at the bottom to show the selected priority text and use `PRIORITY_COLORS[priority]` as its background color.

## Hints

**Controlled textarea:**
```jsx
<textarea value={description} onChange={(e) => setDescription(e.target.value)} />
```

**Controlled select:**
```jsx
<select value={priority} onChange={(e) => setPriority(e.target.value)}>
```

**Word count:**
```jsx
const wordCount = description.trim().split(/\s+/).filter(Boolean).length;
```

## Run It
```bash
npm install
npm run dev
```
