# URL Params
> Module 04 · Lesson 03

## Learning Goals
- Define a dynamic route segment using `:paramName` in a path string
- Read URL parameters in a component using `useParams()`
- Use the param value to look up matching data from an array
- Handle "not found" cases when no data matches the param

## What's Happening
`:parkId` in the route path is a placeholder. React Router captures whatever is in that URL position and makes it available via `useParams()` as a string. You must convert it to a number before comparing with numeric IDs.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. Work top-down: define the route, then read the param, then use it to find the park.

## Hints

**Dynamic route:**
```jsx
<Route path="/parks/:parkId" element={<ParkDetailPage />} />
```

**Reading the param:**
```jsx
const { parkId } = useParams();
const park = PARKS.find(p => p.id === Number(parkId));
```

**Not-found guard:**
```jsx
if (!park) return <p>Park not found.</p>;
```

## Run It
```bash
npm install
npm run dev
```
