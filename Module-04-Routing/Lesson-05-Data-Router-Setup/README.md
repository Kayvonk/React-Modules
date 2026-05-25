# Data Router Setup
> Module 04 · Lesson 05

## Learning Goals
- Create a router from a plain JavaScript route config array using `createMemoryRouter`
- Replace `<MemoryRouter>` with `<RouterProvider>` at the app root
- Understand why the data router API is needed for loaders and actions (next lesson)

## What's Happening
The JSX `<Routes>/<Route>` syntax is convenient but doesn't support data loading. `createMemoryRouter(routes)` accepts the same route information as a plain JS array and returns a router object that enables `loader` and `action` functions on each route.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. The starting code uses the old JSX syntax — convert it.

## Hints

**Route config array:**
```jsx
const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/tech", element: <TechPage /> },
];
```

**Create and provide:**
```jsx
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
const router = createMemoryRouter(routes);
export default function App() {
  return <RouterProvider router={router} />;
}
```

You'll still need a `<nav>` — put it inside a root layout route or directly in the route element.

## Run It
```bash
npm install
npm run dev
```
