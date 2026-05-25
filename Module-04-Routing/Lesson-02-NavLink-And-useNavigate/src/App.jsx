// LESSON: NavLink and useNavigate
// NavLink auto-applies an active class/style to the link matching the current URL.
// useNavigate lets you navigate programmatically — for example, after a button click.

import { MemoryRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom';

function HomePage() { return <main><h2>Home</h2><p>Welcome to the recipe site.</p></main>; }

function RecipesPage() { return <main><h2>Recipes</h2><p>Browse our collection.</p></main>; }

function AboutPage() {
  const navigate = useNavigate();
  // TODO 3: Add a "← Back" button below that calls navigate(-1) to go back in history.
  return (
    <main>
      <h2>About</h2>
      <p>We love good food.</p>
    </main>
  );
}

export default function App() {
  return (
    <MemoryRouter>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#222" }}>
        {/* TODO 1: Replace these <Link> elements with <NavLink> */}
        {/* TODO 2: Use the className prop (as a function) to apply bold + underline when isActive is true */}
        <NavLink to="/"        style={{ color: "white" }}>Home</NavLink>
        <NavLink to="/recipes" style={{ color: "white" }}>Recipes</NavLink>
        <NavLink to="/about"   style={{ color: "white" }}>About</NavLink>
      </nav>
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/about"   element={<AboutPage />} />
      </Routes>
    </MemoryRouter>
  );
}
