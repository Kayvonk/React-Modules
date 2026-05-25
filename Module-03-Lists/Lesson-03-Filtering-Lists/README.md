# Filtering Lists
> Module 03 · Lesson 03

## Learning Goals
- Derive a filtered view from state using `Array.filter()` — no extra state needed
- Drive the active filter with a state variable
- Highlight the active filter button conditionally
- Render an empty-state message when the filtered list is empty

## What's Happening
The source `JOBS` array never changes — it's a constant. Only the filter setting is state. The filtered list is a derived value recomputed on every render, so it's always in sync with both the source data and the active filter.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. Also update each filter button's `onClick` to set `activeFilter`.

## Hints

**Filtering:**
```jsx
const filteredJobs = activeFilter === 'All'
  ? JOBS
  : JOBS.filter(job => job.type === activeFilter);
```

**Active button highlight:**
```jsx
style={{ fontWeight: f === activeFilter ? 'bold' : 'normal' }}
```

**Empty state:**
```jsx
{filteredJobs.length === 0 && <p>No jobs match this filter.</p>}
```

## Run It
```bash
npm install
npm run dev
```
