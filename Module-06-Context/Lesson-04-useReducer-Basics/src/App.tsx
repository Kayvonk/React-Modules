// LESSON: useReducer Basics
// useReducer manages complex state with a reducer function that handles each action type.
// All state transitions are explicit and centralized — easier to reason about than many useState calls.

import { useReducer } from 'react';

interface BankState {
  balance: number;
  history: string[];
}

type BankAction =
  | { type: 'DEPOSIT';          amount: number }
  | { type: 'WITHDRAW';         amount: number }
  | { type: 'APPLY_INTEREST' };

const INITIAL_STATE: BankState = { balance: 1000, history: ['Account opened'] };

function bankReducer(state: BankState, action: BankAction): BankState {
  switch (action.type) {
    case 'DEPOSIT':
      // TODO 1: Return new state with balance increased by action.amount,
      //         and a new history entry added (e.g., "+ $X.XX deposited").
      return state;

    case 'WITHDRAW':
      // TODO 2: Return new state with balance decreased by action.amount
      //         (do not allow balance to go below 0). Add a history entry.
      return state;

    case 'APPLY_INTEREST':
      // TODO 3: Return new state with balance multiplied by 1.05 (5% interest).
      //         Add a history entry showing the new balance.
      return state;

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(bankReducer, INITIAL_STATE);

  return (
    <div style={{ padding: "2rem", maxWidth: "380px" }}>
      <h1>Bank Account</h1>
      <p style={{ fontSize: "1.5rem" }}>Balance: <strong>${state.balance.toFixed(2)}</strong></p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <button onClick={() => dispatch({ type: 'DEPOSIT',  amount: 100 })}>Deposit $100</button>
        <button onClick={() => dispatch({ type: 'WITHDRAW', amount: 50  })}>Withdraw $50</button>
        <button onClick={() => dispatch({ type: 'APPLY_INTEREST' })}>Apply 5% Interest</button>
      </div>
      <h3>History</h3>
      <ul>{state.history.map((entry, i) => <li key={i}>{entry}</li>)}</ul>
    </div>
  );
}
