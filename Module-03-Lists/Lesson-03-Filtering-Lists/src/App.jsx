// LESSON: Filtering Lists
// Derive a filtered view from the source data using Array.filter() — don't store
// a copy in state. Drive the active filter with a state variable.

import { useState } from 'react';

const JOBS = [
  { id: 1, title: "Frontend Developer", type: "Full-time",  company: "Acme Corp" },
  { id: 2, title: "UX Designer",        type: "Contract",   company: "Studio X" },
  { id: 3, title: "Data Analyst",       type: "Part-time",  company: "DataCo" },
  { id: 4, title: "DevOps Engineer",    type: "Full-time",  company: "CloudBase" },
  { id: 5, title: "React Developer",    type: "Remote",     company: "StartupY" },
  { id: 6, title: "QA Engineer",        type: "Part-time",  company: "QualityFirst" },
];

const FILTERS = ['All', 'Full-time', 'Part-time', 'Contract', 'Remote'];

export default function App() {
  // TODO 1: Declare a state variable called activeFilter, starting as 'All'.

  // TODO 2: Derive a filteredJobs variable using Array.filter() — when activeFilter
  //         is 'All' show everything; otherwise show only jobs whose type matches.
  //         Do NOT store this in state — compute it in the render body.

  // TODO 3: Map filteredJobs to render job cards, and show a "No results" <p>
  //         when filteredJobs.length is 0.

  return (
    <div style={{ padding: "2rem", maxWidth: "500px" }}>
      <h1>Job Board</h1>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => {}}
            style={{ fontWeight: f === 'All' ? 'bold' : 'normal' }}
          >
            {f}
          </button>
        ))}
      </div>
      {/* job cards here */}
    </div>
  );
}
