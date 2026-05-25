// LESSON: Setup and Basic Routes
// Wrap your app in a Router, map URL paths to components with <Route>,
// and use <Link> to navigate without a full page reload.

import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';

function HomePage()     { return <main><h2>Welcome to the Museum</h2><p>Explore our exhibits.</p></main>; }
function ExhibitsPage() { return <main><h2>Exhibits</h2><p>Ancient Egypt, Modern Art, Space.</p></main>; }
function ContactPage()  { return <main><h2>Contact</h2><p>info@museum.example</p></main>; }

export default function App() {
  // TODO 1: Wrap everything below in <MemoryRouter> so the router context is available.

  // TODO 2: Add <Routes> and <Route> elements inside the nav/main structure that map:
  //         "/" → HomePage, "/exhibits" → ExhibitsPage, "/contact" → ContactPage.

  // TODO 3: Replace the plain <a> tags in the nav with <Link to="..."> so navigation
  //         happens without a full page reload.

  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#222", color: "white" }}>
        <a href="/">Home</a>
        <a href="/exhibits">Exhibits</a>
        <a href="/contact">Contact</a>
      </nav>
      <HomePage />
    </div>
  );
}
