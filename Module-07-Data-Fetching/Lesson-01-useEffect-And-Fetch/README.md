# useEffect and Fetch
> Module 07 · Lesson 01

## Learning Goals
- Fetch data from a public API inside `useEffect` with an empty `[]` dependency array
- Store the response in typed state using `useState<T[] | null>(null)`
- Show a loading placeholder while data is null and render cards once it arrives

## What's Happening
`useEffect` with `[]` runs once after the first render. The fetch is asynchronous — React doesn't pause rendering for it. That's why you start with `null` state (loading) and switch to the fetched data when the Promise resolves. The component re-renders once with the data.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The `CountryCard` component and `Country` interface are already defined.

## Hints

**Fetching inside useEffect:**
```tsx
useEffect(() => {
  fetch('https://example.com/api')
    .then(res => res.json())
    .then(data => setCountries(data));
}, []);
```

**Conditional render:**
```tsx
if (countries === null) return <p>Loading...</p>;
```

**Mapping to cards:**
```tsx
{countries.map(c => (
  <CountryCard
    key={c.name.common}
    name={c.name.common}
    capital={c.capital?.[0]}
    region={c.region}
    population={c.population}
  />
))}
```

## Run It
```bash
npm install
npm run dev
```
