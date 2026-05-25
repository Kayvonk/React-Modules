// LESSON: Typing Props
// Define a component's expected props using an interface.
// TypeScript will error immediately if you pass the wrong type or miss a required prop.

import { useState } from 'react';

// TODO 1: Define a ProductCardProps interface with:
//         name: string, price: number, category: string

// TODO 2: Add imageUrl?: string as an optional field to the interface.

// TODO 3: Annotate the ProductCard function parameter as ProductCardProps.

function ProductCard({ name, price, category }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "4px", marginBottom: "0.75rem" }}>
      <h3>{name}</h3>
      <p>{category}</p>
      <p>${price.toFixed(2)}</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Product Grid</h1>
      <ProductCard name="Mechanical Keyboard" price={129.99} category="Tech" />
      <ProductCard name="Desk Lamp"           price={39.95}  category="Home" />
      <ProductCard name="Standing Desk"       price={449.00} category="Furniture" imageUrl="desk.jpg" />
    </div>
  );
}
