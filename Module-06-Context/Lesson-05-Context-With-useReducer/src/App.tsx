// LESSON: Context with useReducer
// Combine Context and useReducer to share complex state across the tree.
// Export both state and dispatch through context so producers and consumers are decoupled.

import { createContext, useContext, useReducer } from 'react';

type TaskStatus = 'todo' | 'doing' | 'done';
interface Task { id: string; title: string; status: TaskStatus; }
interface BoardState { tasks: Task[]; }
type BoardAction =
  | { type: 'ADD_TASK';    title: string }
  | { type: 'MOVE_TASK';   id: string; status: TaskStatus }
  | { type: 'DELETE_TASK'; id: string };

interface BoardContextValue { state: BoardState; dispatch: React.Dispatch<BoardAction>; }
const BoardContext = createContext<BoardContextValue>({ state: { tasks: [] }, dispatch: () => {} });

const INITIAL: BoardState = {
  tasks: [
    { id: '1', title: 'Design mockup', status: 'done' },
    { id: '2', title: 'Build components', status: 'doing' },
    { id: '3', title: 'Write tests', status: 'todo' },
  ],
};

function boardReducer(state: BoardState, action: BoardAction): BoardState {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, { id: crypto.randomUUID(), title: action.title, status: 'todo' }] };
    case 'MOVE_TASK':
      return { tasks: state.tasks.map(t => t.id === action.id ? { ...t, status: action.status } : t) };
    case 'DELETE_TASK':
      return { tasks: state.tasks.filter(t => t.id !== action.id) };
    default: return state;
  }
}

// TODO 1: Complete BoardProvider — call useReducer with boardReducer and INITIAL,
//         then put both state and dispatch into the context value.
function BoardProvider({ children }: { children: React.ReactNode }) {
  return <BoardContext.Provider value={{ state: INITIAL, dispatch: () => {} }}>{children}</BoardContext.Provider>;
}

const STATUSES: TaskStatus[] = ['todo', 'doing', 'done'];

function Column({ status }: { status: TaskStatus }) {
  // TODO 2: Call useContext(BoardContext) to get state and dispatch.
  //         Render tasks filtered by this column's status.
  //         Each task should have a "→ Move" select and a "Delete" button that dispatch actions.
  return (
    <div style={{ flex: 1, border: "1px solid #ccc", padding: "0.75rem", borderRadius: "4px" }}>
      <h3>{status}</h3>
      <p>(tasks go here)</p>
    </div>
  );
}

function AddTaskForm() {
  // TODO 3: Call useContext to get dispatch. On form submit, dispatch ADD_TASK with the title.
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: "1rem" }}>
      <input name="title" placeholder="New task title..." />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default function App() {
  return (
    <BoardProvider>
      <div style={{ padding: "2rem" }}>
        <h1>Task Board</h1>
        <AddTaskForm />
        <div style={{ display: "flex", gap: "1rem" }}>
          {STATUSES.map(s => <Column key={s} status={s} />)}
        </div>
      </div>
    </BoardProvider>
  );
}
