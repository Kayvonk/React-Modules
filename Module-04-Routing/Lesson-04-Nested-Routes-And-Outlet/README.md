# Nested Routes and Outlet
> Module 04 · Lesson 04

## Learning Goals
- Define nested routes by placing `<Route>` elements inside a parent `<Route>`
- Use `<Outlet />` to mark where child content renders inside a layout component
- Understand that the layout stays mounted while only the `<Outlet>` content swaps
- Use an index route as the default child when no child path is matched

## What's Happening
When you nest routes, the parent renders its component AND an `<Outlet>` placeholder. React Router fills that placeholder with whichever child route matches. The sidebar and layout stay mounted — only the outlet content changes. This is how most app shells (navigation + content area) work.

## Your Task
Complete the 3 TODOs in `src/App.jsx`.

## Hints

**Nested routes:**
```jsx
<Route path="/account" element={<AccountLayout />}>
  <Route index element={<p>Select a section.</p>} />
  <Route path="profile"  element={<ProfilePage />} />
  <Route path="orders"   element={<OrdersPage />} />
  <Route path="settings" element={<SettingsPage />} />
</Route>
```

**Outlet in the layout:**
```jsx
function AccountLayout() {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <aside>...</aside>
      <main><Outlet /></main>
    </div>
  );
}
```

## Run It
```bash
npm install
npm run dev
```
