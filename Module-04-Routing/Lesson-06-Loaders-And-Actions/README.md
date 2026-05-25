# Loaders and Actions
> Module 04 · Lesson 06

## Learning Goals
- Write a `loader` function that runs before a route renders and returns data
- Read loader data in a component with `useLoaderData()`
- Understand that `action` functions handle `<Form>` submissions (not DOM events)
- Track submission state with `useNavigation` to show loading feedback

## What's Happening
Loaders run before rendering — the component receives data already available, no loading state needed. Actions receive a `{ request }` argument from the router; you read the form data with `request.formData()`. `<Form method="post">` from react-router-dom submits to the action without a page reload.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. An RSVP action stub is already in place — wire your loader and update EventsPage.

## Hints

**Loader:**
```jsx
function eventsLoader() {
  return EVENTS; // can also be async and return a Promise
}
// in route config: { path: "/", element: <EventsPage />, loader: eventsLoader }
```

**useLoaderData:**
```jsx
const events = useLoaderData();
```

**Action that redirects:**
```jsx
async function rsvpAction({ request }) {
  const data = await request.formData();
  const name = data.get('name');
  // process name...
  return redirect('/confirmation');
}
```

## Run It
```bash
npm install
npm run dev
```
