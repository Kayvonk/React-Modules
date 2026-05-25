// LESSON: Multiple Inputs
// Manage all form fields with one state object and one onChange handler
// using the computed property name pattern: { [e.target.name]: e.target.value }.

import { useState } from 'react';

export default function App() {
  // TODO 1: Declare a single state object called form with keys: guestName, checkIn, checkOut, roomType.
  //         Set each to an empty string as the initial value.

  // TODO 2: Write one handleChange function that uses e.target.name and a computed property
  //         to update the right field — spread the existing state, then override just the changed key.

  // TODO 3: Below the form, add a "Booking Summary" section that reads from the form state object
  //         and displays each field value (show a dash if empty).

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Room Booking</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: "0.75rem" }}>
          <label>Guest Name<br />
            <input name="guestName" type="text" style={{ width: "100%" }} />
          </label>
        </div>
        <div style={{ marginBottom: "0.75rem" }}>
          <label>Check-in<br />
            <input name="checkIn" type="date" style={{ width: "100%" }} />
          </label>
        </div>
        <div style={{ marginBottom: "0.75rem" }}>
          <label>Check-out<br />
            <input name="checkOut" type="date" style={{ width: "100%" }} />
          </label>
        </div>
        <div style={{ marginBottom: "0.75rem" }}>
          <label>Room Type<br />
            <input name="roomType" type="text" style={{ width: "100%" }} />
          </label>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
