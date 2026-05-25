// LESSON: Data Router Setup
// Replace <MemoryRouter> + JSX route syntax with createMemoryRouter() and <RouterProvider>.
// This unlocks the loader/action API used in the next lesson.

// TODO 1: Import createMemoryRouter and RouterProvider from react-router-dom
//         (remove the MemoryRouter, Routes, Route, and Link imports you won't need).

import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';

function HomePage()    { return <div style={{ padding: "1rem" }}><h2>Home</h2><p>Tech News</p></div>; }
function TechPage()    { return <div style={{ padding: "1rem" }}><h2>Tech</h2></div>; }
function SciencePage() { return <div style={{ padding: "1rem" }}><h2>Science</h2></div>; }
function SportsPage()  { return <div style={{ padding: "1rem" }}><h2>Sports</h2></div>; }

// TODO 2: Define a routes array of plain config objects:
//         [{ path: "/", element: <HomePage /> }, { path: "/tech", element: <TechPage /> }, ...]
//         then call createMemoryRouter(routes) and store the result.

// TODO 3: Replace the JSX router below with <RouterProvider router={router} />.

export default function App() {
  return (
    <MemoryRouter>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#111", color: "white" }}>
        <Link to="/"        style={{ color: "white" }}>Home</Link>
        <Link to="/tech"    style={{ color: "white" }}>Tech</Link>
        <Link to="/science" style={{ color: "white" }}>Science</Link>
        <Link to="/sports"  style={{ color: "white" }}>Sports</Link>
      </nav>
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/tech"    element={<TechPage />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/sports"  element={<SportsPage />} />
      </Routes>
    </MemoryRouter>
  );
}
