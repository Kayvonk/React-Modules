# Context with useState
> Module 06 · Lesson 03

## Learning Goals
- Combine `createContext` with `useState` inside a Provider component
- Export both the context value and the setter so consumers can read and update
- Build sibling components that share state through context without prop drilling

## What's Happening
`ReadingProvider` owns the `currentPage` state. It puts both `currentPage` and `setCurrentPage` into the context value so any descendant can read the page and update it. `ProgressBar` and `ChapterMenu` are siblings — neither passes props to the other, yet they stay in sync through context.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The context type and Provider shell are already defined.

## Hints

**useState inside Provider:**
```tsx
function ReadingProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <ReadingContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </ReadingContext.Provider>
  );
}
```

**Progress bar width:**
```tsx
const pct = Math.round((currentPage / TOTAL_PAGES) * 100);
<div style={{ width: `${pct}%`, background: "steelblue", height: "100%", borderRadius: "6px" }} />
```

## Run It
```bash
npm install
npm run dev
```
