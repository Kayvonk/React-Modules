// LESSON: Components and Props
// Props let you pass data into a component so it can render different output each time.
// Destructure props in the function signature to use them directly by name.

// TODO 1: Destructure title, year, and genre from the props so you can use
//         them directly inside the JSX (instead of props.title, etc.).

// TODO 2: Render title, year, and genre inside the <div> so each MovieCard
//         shows its own data.

// TODO 3: Give genre a default value of "Unknown" so it is optional when
//         rendering a MovieCard (one of the cards below doesn't pass genre).

function MovieCard({ title, year }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem" }}>
      <h2>title goes here</h2>
      <p>year goes here</p>
      <p>genre goes here</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>My Movie List</h1>
      <MovieCard title="Inception" year={2010} genre="Sci-Fi" />
      <MovieCard title="The Dark Knight" year={2008} genre="Action" />
      <MovieCard title="Interstellar" year={2014} genre="Sci-Fi" />
      <MovieCard title="Memento" year={2000} />
    </div>
  );
}
