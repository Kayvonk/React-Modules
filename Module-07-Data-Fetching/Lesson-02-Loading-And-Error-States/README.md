# Loading and Error States
> Module 07 · Lesson 02

## Learning Goals
- Track `isLoading` and `error` states alongside data
- Set `isLoading` to `true` before fetching and `false` in a `finally` block
- Catch network errors and store an error message in state
- Render three distinct UI states: loading, error, and success

## What's Happening
`finally` always runs — whether the fetch succeeded or failed — making it the right place to clear `isLoading`. `catch` only runs on failure, where you store the error message. The component renders the right thing based on which state variables are set.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The fetch call and repo rendering are already in place.

## Hints

**Three-state pattern:**
```ts
const [data, setData] = useState<Repo[]>([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
```

**finally:**
```ts
fetch(url)
  .then(...)
  .catch(err => setError(err.message))
  .finally(() => setIsLoading(false));
```

**Experiment:** Change the URL to something invalid and verify the error state appears.

## Run It
```bash
npm install
npm run dev
```
