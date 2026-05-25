// LESSON: Composing Custom Hooks
// Complex behavior emerges from composing simple hooks. Each hook handles one concern —
// together they build a search-with-history feature cleanly.

import { useState, useEffect } from 'react';

// ── useDebounce (from Lesson 03) ──────────────────────────────
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

// ── useFetch (from Lesson 04) ─────────────────────────────────
interface Movie { imdbID: string; Title: string; Year: string; Type: string; }
interface OmdbResponse { Search?: Movie[]; Response: string; }

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    setIsLoading(true);
    fetch(url, { signal: controller.signal })
      .then(r => r.json())
      .then(d => { setData(d); setIsLoading(false); })
      .catch(err => { if (err.name !== 'AbortError') setIsLoading(false); });
    return () => controller.abort();
  }, [url]);
  return { data, isLoading };
}

// ── useLocalStorage (from Lesson 02) ─────────────────────────
function useLocalStorage<T>(key: string, initialValue: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : initialValue;
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
}

const OMDB_URL = (q: string) =>
  `https://www.omdbapi.com/?apikey=trilogy&s=${encodeURIComponent(q)}&type=movie`;

export default function App() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);
  const { data, isLoading } = useFetch<OmdbResponse>(debouncedQuery ? OMDB_URL(debouncedQuery) : '');
  const movies = data?.Search ?? [];

  // TODO 1: Call useLocalStorage<string[]>('movie-search-history', []) to persist the search history.

  // TODO 2: When debouncedQuery is non-empty and a search completes (movies.length > 0),
  //         add debouncedQuery to history — deduplicate and cap at 5 entries.

  // TODO 3: Render the history list below the search results, and add a "Clear history" button
  //         that resets history to [].

  return (
    <div style={{ padding: "2rem", maxWidth: "500px" }}>
      <h1>Movie Search</h1>
      <input
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        placeholder="Search movies..."
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      {isLoading && <p>Searching...</p>}
      <ul>
        {movies.map(m => (
          <li key={m.imdbID}>{m.Title} ({m.Year})</li>
        ))}
      </ul>
      {/* history UI goes here */}
    </div>
  );
}
