// LESSON: Context with useState
// Combine createContext and useState inside a Provider component so any
// descendant can read and update shared state without prop drilling.

import { createContext, useContext, useState } from 'react';

interface ReadingContextValue {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const ReadingContext = createContext<ReadingContextValue>({
  currentPage: 1,
  setCurrentPage: () => {},
});

// TODO 1: Add useState for currentPage (starting at 1) inside ReadingProvider,
//         then include both currentPage and setCurrentPage in the context value.

function ReadingProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReadingContext.Provider value={{ currentPage: 1, setCurrentPage: () => {} }}>
      {children}
    </ReadingContext.Provider>
  );
}

const CHAPTERS = ['Introduction', 'Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'];
const TOTAL_PAGES = 200;

function ProgressBar() {
  // TODO 2: Call useContext(ReadingContext) to get currentPage, then render
  //         a progress bar showing (currentPage / TOTAL_PAGES * 100)%.
  return <div style={{ background: "#eee", height: "12px", borderRadius: "6px" }}>progress here</div>;
}

function ChapterMenu() {
  // TODO 3: Call useContext to get both currentPage and setCurrentPage.
  //         Render buttons for each chapter that call setCurrentPage with an appropriate page number.
  return (
    <div>
      {CHAPTERS.map((ch, i) => (
        <button key={i} style={{ display: "block", marginBottom: "0.25rem" }}>
          {ch}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <ReadingProvider>
      <div style={{ padding: "2rem", maxWidth: "400px" }}>
        <h1>Reading Tracker</h1>
        <ProgressBar />
        <ChapterMenu />
      </div>
    </ReadingProvider>
  );
}
