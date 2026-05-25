// LESSON: Loaders and Actions
// A loader runs before a route renders and returns data the component reads with useLoaderData().
// An action handles <Form> submissions and can redirect after processing.

import { createMemoryRouter, RouterProvider, Link, Form, useLoaderData, useNavigation, redirect } from 'react-router-dom';

const EVENTS = [
  { id: 1, title: "React Summit",   date: "2025-06-15", spots: 3 },
  { id: 2, title: "JS Conf",        date: "2025-07-20", spots: 10 },
  { id: 3, title: "CSS Day",        date: "2025-08-05", spots: 0 },
];

// ── Pages ─────────────────────────────────────────────────────

function EventsPage() {
  // TODO 2: Call useLoaderData() to get events, then map them into a list of links.
  return <div style={{ padding: "1rem" }}><h2>Events</h2><p>Loading...</p></div>;
}

function RsvpPage() {
  const navigation = useNavigation();
  return (
    <div style={{ padding: "1rem" }}>
      <h2>RSVP</h2>
      <Form method="post">
        <input name="name" placeholder="Your name" required />
        <button type="submit" disabled={navigation.state === 'submitting'}>
          {navigation.state === 'submitting' ? 'Submitting...' : 'RSVP'}
        </button>
      </Form>
    </div>
  );
}

function ConfirmationPage() {
  return <div style={{ padding: "1rem" }}><h2>You're on the list!</h2><Link to="/">← Back</Link></div>;
}

// ── Loaders and actions ────────────────────────────────────────

// TODO 1: Write an eventsLoader function that returns the EVENTS array.
//         Add it as loader: eventsLoader on the "/" route below.

// TODO 3: Write an rsvpAction function that calls e.preventDefault() ... wait,
//         actions in React Router receive a { request } arg, not a DOM event.
//         Parse the form data with: const data = await request.formData()
//         Then redirect to "/confirmation".

const router = createMemoryRouter([
  { path: "/",            element: <EventsPage /> },
  { path: "/rsvp",        element: <RsvpPage />,        action: async () => redirect('/confirmation') },
  { path: "/confirmation",element: <ConfirmationPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
