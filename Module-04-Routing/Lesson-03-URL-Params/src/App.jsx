// LESSON: URL Params
// Define a dynamic route segment with :paramName, then read it inside the
// matched component using the useParams() hook.

import { MemoryRouter, Routes, Route, Link, useParams } from 'react-router-dom';

const PARKS = [
  { id: 1, name: "Yellowstone",    state: "Wyoming",    size: "2.2M acres" },
  { id: 2, name: "Grand Canyon",   state: "Arizona",    size: "1.2M acres" },
  { id: 3, name: "Yosemite",       state: "California", size: "748K acres" },
  { id: 4, name: "Zion",           state: "Utah",       size: "148K acres" },
];

function ParksListPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>National Parks</h2>
      <ul>
        {PARKS.map(park => (
          <li key={park.id}>
            <Link to={`/parks/${park.id}`}>{park.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ParkDetailPage() {
  // TODO 2: Call useParams() to get the parkId from the URL.

  // TODO 3: Find the matching park from PARKS using parkId (convert to Number first),
  //         then display its name, state, and size. Show "Park not found" if no match.

  return <div style={{ padding: "2rem" }}>Park detail goes here</div>;
}

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<ParksListPage />} />
        {/* TODO 1: Add a dynamic route for park details with path="/parks/:parkId" */}
      </Routes>
    </MemoryRouter>
  );
}
