// LESSON: Event Handlers
// Event handlers are functions you pass to JSX props like onClick or onChange.
// Use an inline arrow to pass data to a handler; use a named function for clarity.

import { useState } from 'react';

const COLORS = [
  { name: "Crimson",   hex: "#DC143C" },
  { name: "Teal",      hex: "#008080" },
  { name: "Goldenrod", hex: "#DAA520" },
  { name: "Indigo",    hex: "#4B0082" },
  { name: "Coral",     hex: "#FF6347" },
];

export default function App() {
  // TODO 1: Declare a state variable called selectedColor, starting as null.

  // TODO 2: Add an onClick to each swatch button that sets selectedColor to
  //         the matching color object (use an inline arrow so you can pass the value).

  // TODO 3: Below the swatches, conditionally render a preview box and the color name
  //         only when selectedColor is not null (use the && operator).

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Color Palette</h1>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {COLORS.map((color) => (
          <button
            key={color.name}
            onClick={() => {}}
            style={{ background: color.hex, width: 48, height: 48, border: "none", cursor: "pointer" }}
          />
        ))}
      </div>
      {/* render preview here */}
    </div>
  );
}
