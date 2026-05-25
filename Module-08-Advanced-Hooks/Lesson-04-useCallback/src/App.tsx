// LESSON: useCallback
// Functions are recreated on every render, which causes React.memo'd children to
// re-render unnecessarily. useCallback returns a stable function reference.

import { useState, useCallback, memo } from 'react';

interface Note { id: string; text: string; }

// NoteList is memoized — it should only re-render when its props actually change.
const NoteList = memo(function NoteList({
  notes,
  onDelete,
}: {
  notes: Note[];
  onDelete: (id: string) => void;
}) {
  console.log('NoteList rendered'); // watch this in the console
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          {note.text}
          <button onClick={() => onDelete(note.id)} style={{ marginLeft: "0.5rem" }}>×</button>
        </li>
      ))}
    </ul>
  );
});

export default function App() {
  const [notes, setNotes] = useState<Note[]>([
    { id: '1', text: 'Buy groceries' },
    { id: '2', text: 'Finish the lesson' },
  ]);
  const [parentCount, setParentCount] = useState(0);

  // TODO 1: Click "Increment Parent Counter" and watch the console — NoteList re-renders
  //         even though notes didn't change. This is because onDelete is a new function
  //         every render, so React.memo sees different props.

  // TODO 2: Wrap handleDelete in useCallback with [notes] as the dependency so its
  //         reference stays stable between renders (as long as notes doesn't change).

  // TODO 3: Click "Increment Parent Counter" again — NoteList should no longer log.

  function handleDelete(id: string): void {
    setNotes(prev => prev.filter(n => n.id !== id));
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Notes</h1>
      <p>Parent counter: {parentCount}</p>
      <button onClick={() => setParentCount(c => c + 1)}>Increment Parent Counter</button>
      <NoteList notes={notes} onDelete={handleDelete} />
    </div>
  );
}
