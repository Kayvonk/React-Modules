// LESSON: Loading and Error States
// Track loading and error states alongside the data so the UI has three
// distinct modes: loading, error, and success.

import { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  html_url: string;
}

export default function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  // TODO 1: Declare isLoading (boolean, starts true) and error (string | null, starts null) state variables.

  useEffect(() => {
    // TODO 2: Set isLoading to true before the fetch.
    //         In a finally block, set isLoading to false.
    //         In a catch block, set error to a message string.
    fetch('https://api.github.com/orgs/facebook/repos?per_page=10&sort=updated')
      .then(res => res.json())
      .then(data => setRepos(data.sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count)));
  }, []);

  // TODO 3: Before the main return, render early returns for loading and error states:
  //         if (isLoading) return <p>Loading...</p>;
  //         if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1>Facebook GitHub Repos</h1>
      {repos.map(r => (
        <div key={r.id} style={{ borderBottom: "1px solid #eee", padding: "0.75rem 0" }}>
          <a href={r.html_url} target="_blank" rel="noreferrer"><strong>{r.name}</strong></a>
          <p style={{ margin: "0.25rem 0", color: "#555" }}>{r.description ?? '—'}</p>
          <span>⭐ {r.stargazers_count.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}
