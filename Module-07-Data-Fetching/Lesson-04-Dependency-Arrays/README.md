# Dependency Arrays
> Module 07 · Lesson 04

## Learning Goals
- Re-trigger a `useEffect` by including a state variable in its dependency array
- Understand the difference between `[]` (once on mount) and `[dep]` (when dep changes)
- Confirm re-runs by logging inside the effect

## What's Happening
The dependency array tells React when to run the effect. `[]` = "only on mount." `[selectedCity]` = "on mount AND every time `selectedCity` changes." When the user picks a different city, React notices `selectedCity` changed, re-runs the effect, and the new weather data appears.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. The simulated fetch response and display are already in place. (In a real app you'd swap the fake data for an actual API call — the pattern is identical.)

## Hints

**Dependency array:**
```tsx
useEffect(() => {
  console.log('Fetching for:', selectedCity);
  // fetch...
}, [selectedCity]); // re-runs when selectedCity changes
```

**Active button style:**
```tsx
style={{ fontWeight: city === selectedCity ? 'bold' : 'normal' }}
```

## Run It
```bash
npm install
npm run dev
```
