# Setup and Basic Routes
> Module 04 · Lesson 01

## Learning Goals
- Wrap an application in a Router to enable client-side routing
- Map URL paths to components using `<Routes>` and `<Route>`
- Navigate between pages with `<Link>` without triggering a full page reload

## What's Happening
React Router intercepts URL changes and renders the matching component — no server round-trip. `MemoryRouter` stores the URL in memory (great for sandboxes and learning). In production apps you'd use `BrowserRouter` which uses the real browser URL bar.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. The three page components are already written.

## Hints

**Router structure:**
```jsx
<MemoryRouter>
  <nav>...</nav>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/exhibits" element={<ExhibitsPage />} />
  </Routes>
</MemoryRouter>
```

**Link:**
```jsx
<Link to="/exhibits" style={{ color: "white" }}>Exhibits</Link>
```

Note: `<Link>` renders as an `<a>` in the DOM but intercepts the click so the browser doesn't reload.

## Run It
```bash
npm install
npm run dev
```
