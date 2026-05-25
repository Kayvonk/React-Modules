# useRef — DOM Access
> Module 08 · Lesson 01

## Learning Goals
- Create a ref to a DOM element using `useRef<HTMLInputElement>(null)`
- Attach the ref to a JSX element with the `ref` prop
- Access the DOM node through `ref.current` to call imperative methods like `.focus()`
- Understand that changing `ref.current` does NOT trigger a re-render

## What's Happening
`useRef` returns a stable object `{ current: null }`. When React renders the element that has `ref={inputRef}`, it assigns the DOM node to `inputRef.current`. You can then call any DOM method on it — `.focus()`, `.scrollIntoView()`, `.select()`, etc. — without React managing that interaction.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The input and clear button are already rendered.

## Hints

**Creating and attaching:**
```tsx
const inputRef = useRef<HTMLInputElement>(null);
<input ref={inputRef} ... />
```

**Auto-focus on mount:**
```tsx
useEffect(() => {
  inputRef.current?.focus();
}, []);
```

**Optional chaining `?.`** is used because `inputRef.current` could theoretically be null before mount.

## Run It
```bash
npm install
npm run dev
```
