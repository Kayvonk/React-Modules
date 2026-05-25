// LESSON: Rendering Lists
// Use Array.map() to transform a data array into JSX elements.
// Every mapped element needs a unique key prop so React can track it efficiently.

const BOOKS = [
  { id: 1, title: "The Pragmatic Programmer", author: "Hunt & Thomas", genre: "Tech" },
  { id: 2, title: "Clean Code",               author: "Robert Martin",  genre: "Tech" },
  { id: 3, title: "Dune",                      author: "Frank Herbert",  genre: "Sci-Fi" },
  { id: 4, title: "Atomic Habits",             author: "James Clear",    genre: "Self-Help" },
];

// TODO 1: Complete the BookCard component so it displays the book's title, author, and genre.

function BookCard({ title, author, genre }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "0.75rem", marginBottom: "0.5rem", borderRadius: "4px" }}>
      <p>title here</p>
    </div>
  );
}

export default function App() {
  // TODO 2: Replace the placeholder below with a .map() over BOOKS that renders
  //         one <BookCard /> per item, passing title, author, and genre as props.

  // TODO 3: Add a key prop to each <BookCard /> using the book's id.

  return (
    <div style={{ padding: "2rem", maxWidth: "500px" }}>
      <h1>Bookshelf</h1>
      <p>Books will appear here</p>
    </div>
  );
}
