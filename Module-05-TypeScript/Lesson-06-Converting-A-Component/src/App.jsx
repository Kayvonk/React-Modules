// LESSON: Converting a Component (starts as .jsx)
// You'll migrate this file to TypeScript step by step:
// rename → add interface → type useState → type handlers → fix errors.

import { useState } from 'react';

// TODO 1: Rename this file from App.jsx to App.tsx (right-click → Rename in VS Code).
//         Also update the import in src/main.jsx to import from './App.tsx' or './App'.
//         Then define a CartItemProps interface with: name, price, quantity.

// TODO 2: Annotate all useState calls with explicit type generics
//         (quantity is number, isWishlisted is boolean).

// TODO 3: Type the handleIncrease and handleDecrease handler functions,
//         then resolve any remaining red underlines TypeScript shows.

function CartItem({ name, price, quantity: initialQty }) {
  const [quantity, setQuantity] = useState(initialQty);
  const [isWishlisted, setIsWishlisted] = useState(false);

  function handleIncrease() {
    setQuantity(q => q + 1);
  }

  function handleDecrease() {
    setQuantity(q => Math.max(1, q - 1));
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "0.75rem", borderRadius: "4px" }}>
      <h3>{name}</h3>
      <p>${(price * quantity).toFixed(2)} ({quantity} × ${price.toFixed(2)})</p>
      <button onClick={handleDecrease}>−</button>
      <span style={{ margin: "0 0.5rem" }}>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
      <button
        onClick={() => setIsWishlisted(w => !w)}
        style={{ marginLeft: "1rem", background: isWishlisted ? "#FFD700" : "#eee" }}
      >
        {isWishlisted ? "★ Wishlisted" : "☆ Wishlist"}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Shopping Cart</h1>
      <CartItem name="Mechanical Keyboard" price={129.99} quantity={1} />
      <CartItem name="USB-C Hub"           price={49.95}  quantity={2} />
    </div>
  );
}
