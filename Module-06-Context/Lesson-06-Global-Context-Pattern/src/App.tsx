// LESSON: Global Context Pattern
// Combine all global state into one typed interface, one reducer, and one Provider.
// Export a useGlobal() hook for clean consumption anywhere in the tree.

import { createContext, useContext, useReducer } from 'react';

interface GlobalState {
  nowPlaying: string;
  queue: string[];
  volume: number;
  isMuted: boolean;
}

type GlobalAction =
  | { type: 'PLAY';        track: string }
  | { type: 'SET_VOLUME';  volume: number }
  | { type: 'TOGGLE_MUTE' }
  | { type: 'ADD_TO_QUEUE'; track: string };

interface GlobalContextValue { state: GlobalState; dispatch: React.Dispatch<GlobalAction>; }
const GlobalContext = createContext<GlobalContextValue>({ state: { nowPlaying: '', queue: [], volume: 80, isMuted: false }, dispatch: () => {} });

function globalReducer(state: GlobalState, action: GlobalAction): GlobalState {
  switch (action.type) {
    case 'PLAY':         return { ...state, nowPlaying: action.track };
    case 'SET_VOLUME':   return { ...state, volume: action.volume, isMuted: action.volume === 0 };
    case 'TOGGLE_MUTE':  return { ...state, isMuted: !state.isMuted };
    case 'ADD_TO_QUEUE': return { ...state, queue: [...state.queue, action.track] };
    default: return state;
  }
}

const INITIAL: GlobalState = { nowPlaying: 'No track selected', queue: [], volume: 80, isMuted: false };

function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(globalReducer, INITIAL);
  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
}

// TODO 1: Complete useGlobal() so it returns useContext(GlobalContext).
//         Components will call useGlobal() instead of useContext(GlobalContext) directly.
export function useGlobal(): GlobalContextValue {
  return { state: INITIAL, dispatch: () => {} }; // replace with useContext call
}

const TRACKS = ['Bohemian Rhapsody', 'Hotel California', 'Stairway to Heaven'];

function PlayerBar() {
  // TODO 2: Call useGlobal() to get state and dispatch.
  //         Render nowPlaying and a "Play" button for each track that dispatches PLAY.
  return <div style={{ padding: "1rem", background: "#222", color: "white" }}>Player: —</div>;
}

function VolumeControl() {
  // TODO 3: Call useGlobal() to get state and dispatch.
  //         Render a range input (0-100) that dispatches SET_VOLUME, and a mute toggle.
  return <div style={{ padding: "1rem" }}>Volume: —</div>;
}

export default function App() {
  return (
    <GlobalProvider>
      <div>
        <PlayerBar />
        <VolumeControl />
        <div style={{ padding: "1rem" }}>
          {TRACKS.map(t => <button key={t} style={{ marginRight: "0.5rem" }}>Play: {t}</button>)}
        </div>
      </div>
    </GlobalProvider>
  );
}
