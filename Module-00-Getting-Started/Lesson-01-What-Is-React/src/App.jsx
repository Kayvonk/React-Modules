// LESSON: What is React?
// React lets you describe your UI as JavaScript functions called components.
// The function below is a React component — it returns JSX that becomes HTML in the browser.

export default function App() {
  return (
    <div>
      <h1>Road Trip Mix</h1>
      <p>Songs in this playlist: 1</p>
      <ul>
        <li>Mr. Brightside</li>
      </ul>
    </div>
  );
}

// TODO 1: Change the heading to your own playlist name.
// TODO 2: Add two more songs to the list as <li> elements.
// TODO 3: Update the "Songs in this playlist" paragraph so the number matches your list.
