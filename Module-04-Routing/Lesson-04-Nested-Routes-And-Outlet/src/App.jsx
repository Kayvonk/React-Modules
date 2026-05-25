// LESSON: Nested Routes and Outlet
// Nest child <Route> elements inside a parent route to share a layout.
// The parent renders <Outlet /> where child content should appear.

import { MemoryRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';

function ProfilePage()  { return <div><h3>Profile</h3><p>Manage your account details.</p></div>; }
function OrdersPage()   { return <div><h3>Orders</h3><p>View your order history.</p></div>; }
function SettingsPage() { return <div><h3>Settings</h3><p>Update preferences.</p></div>; }

function AccountLayout() {
  return (
    <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      <aside>
        <h2>My Account</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <NavLink to="profile">Profile</NavLink>
          <NavLink to="orders">Orders</NavLink>
          <NavLink to="settings">Settings</NavLink>
        </nav>
      </aside>
      {/* TODO 1: Add <Outlet /> here so child routes render inside this layout. */}
      <main><p>Select a section from the sidebar.</p></main>
    </div>
  );
}

export default function App() {
  return (
    <MemoryRouter initialEntries={["/account"]}>
      <Routes>
        {/* TODO 2: Nest child routes (profile, orders, settings) inside the /account route
                    so AccountLayout stays mounted while only the content area changes. */}
        <Route path="/account" element={<AccountLayout />} />
        {/* TODO 3: Add an index route that renders a welcome message when /account is visited
                    with no child path selected. */}
      </Routes>
    </MemoryRouter>
  );
}
