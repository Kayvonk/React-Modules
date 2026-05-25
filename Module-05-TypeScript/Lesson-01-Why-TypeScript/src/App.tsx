// LESSON: Why TypeScript?
// TypeScript adds type annotations to JavaScript so errors are caught at
// compile time — before the code ever runs in the browser.

// TODO 1: Add : number type annotations to both parameters of convertCurrency
//         and a : number return type so TypeScript verifies the math is correct.

function convertCurrency(amount, rate) {
  return amount * rate;
}

// TODO 2: Add a : string return type to formatAmount.
//         Then try returning a number instead — observe the TypeScript error.

function formatAmount(value: number, currency: string) {
  return `${currency}${value.toFixed(2)}`;
}

// TODO 3: Declare a variable called exchangeRate with an explicit : number type,
//         assign it a value, then try assigning a string to it and observe the error.

export default function App() {
  const usd = 100;
  const rate = 1.08;
  const eur = convertCurrency(usd, rate);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Currency Converter</h1>
      <p>{formatAmount(usd, "$")} USD = {formatAmount(eur, "€")} EUR</p>
      <p style={{ color: "#888", fontSize: "0.85rem" }}>Rate: {rate}</p>
    </div>
  );
}
