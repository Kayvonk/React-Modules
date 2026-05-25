// LESSON: Async/Await in useEffect
// useEffect callbacks cannot be async directly. Instead, define an inner async
// function and call it immediately — then use try/catch/finally for error handling.

import { useState, useEffect } from 'react';

interface Launch {
  name:           string;
  date_utc:       string;
  success:        boolean | null;
  details:        string | null;
  links: { webcast: string | null };
}

export default function App() {
  const [launch, setLaunch] = useState<Launch | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO 1: Declare an async function called fetchLaunch inside this effect.
    //         Do NOT make the useEffect callback itself async.

    // TODO 2: Inside fetchLaunch, use await to fetch from:
    //         https://api.spacexdata.com/v4/launches/latest
    //         and await response.json() to parse the result, then call setLaunch.

    // TODO 3: Wrap the fetch in try/catch/finally — catch stores the error message,
    //         finally sets isLoading to false. Call fetchLaunch() at the end of the effect.

    setIsLoading(false); // remove this line once you implement the effect
  }, []);

  if (isLoading) return <p style={{ padding: "2rem" }}>Loading latest launch...</p>;
  if (error)     return <p style={{ padding: "2rem", color: "red" }}>{error}</p>;
  if (!launch)   return null;

  return (
    <div style={{ padding: "2rem", maxWidth: "500px" }}>
      <h1>Latest SpaceX Launch</h1>
      <h2>{launch.name}</h2>
      <p>Date: {new Date(launch.date_utc).toLocaleDateString()}</p>
      <p>Result: {launch.success === null ? 'TBD' : launch.success ? '✅ Success' : '❌ Failed'}</p>
      {launch.details && <p>{launch.details}</p>}
    </div>
  );
}
