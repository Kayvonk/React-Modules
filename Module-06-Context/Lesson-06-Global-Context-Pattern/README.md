# Global Context Pattern
> Module 06 · Lesson 06

## Learning Goals
- Combine all global state into a single typed interface and reducer
- Build a `GlobalProvider` that wraps the entire app
- Export a `useGlobal()` hook for clean consumption in any component
- Distribute state reads and dispatches across multiple focused components

## What's Happening
The pattern: one context, one Provider, one `useGlobal()` hook. Components never import the context object directly — they import and call `useGlobal()`. This lets you change the underlying context structure without touching every consumer.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The reducer and Provider are already fully wired — just complete the hook and the two consumer components.

## Hints

**useGlobal:**
```tsx
export function useGlobal() {
  return useContext(GlobalContext);
}
```

**PlayerBar:**
```tsx
const { state, dispatch } = useGlobal();
// dispatch: dispatch({ type: 'PLAY', track: trackName })
```

**VolumeControl:**
```tsx
<input type="range" min={0} max={100} value={state.volume}
  onChange={e => dispatch({ type: 'SET_VOLUME', volume: Number(e.target.value) })} />
<button onClick={() => dispatch({ type: 'TOGGLE_MUTE' })}>
  {state.isMuted ? 'Unmute' : 'Mute'}
</button>
```

## Run It
```bash
npm install
npm run dev
```
