// LESSON: useFetch
// Extract the three-state fetch pattern (loading, error, data) into a reusable hook
// that works with any URL and any response type via a generic parameter.

import { useState, useEffect } from 'react';

// TODO 1: Create a useFetch<T>(url: string) hook that manages:
//         - data: T | null (starts null)
//         - isLoading: boolean (starts true)
//         - error: string | null (starts null)
//         Return all three values as an object.

// TODO 2: Inside the hook, use AbortController and pass signal to fetch.
//         Return a cleanup that calls controller.abort().
//         In the catch, skip the state update if err.name === 'AbortError'.

interface ApodData {
  title:      string;
  date:       string;
  explanation:string;
  url:        string;
  media_type: 'image' | 'video';
}

const APOD_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

export default function App() {
  // TODO 3: Replace the inline fetch logic below with a useFetch<ApodData>(APOD_URL) call
  //         and render from its return values (data, isLoading, error).

  const [data, setData] = useState<ApodData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(APOD_URL)
      .then(res => res.json())
      .then(d => { setData(d); setIsLoading(false); })
      .catch(err => { setError(err.message); setIsLoading(false); });
  }, []);

  if (isLoading) return <p style={{ padding: "2rem" }}>Loading...</p>;
  if (error)     return <p style={{ padding: "2rem", color: "red" }}>{error}</p>;
  if (!data)     return null;

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1>NASA: Astronomy Picture of the Day</h1>
      <h2>{data.title}</h2>
      <p style={{ color: "#888" }}>{data.date}</p>
      {data.media_type === 'image'
        ? <img src={data.url} alt={data.title} style={{ width: "100%", borderRadius: "8px" }} />
        : <iframe src={data.url} title={data.title} style={{ width: "100%", height: "360px" }} />
      }
      <p style={{ marginTop: "1rem" }}>{data.explanation}</p>
    </div>
  );
}
