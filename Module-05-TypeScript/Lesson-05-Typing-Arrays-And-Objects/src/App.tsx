// LESSON: Typing Arrays and Objects
// Define custom object types with interfaces and use them as generics
// for state arrays. Union types restrict a field to specific string values.

import { useState } from 'react';

// TODO 1: Define an Attendee interface with: id (string), name (string), email (string),
//         and ticketType as a union type: 'general' | 'vip' | 'speaker'.

// TODO 2: Annotate the attendees state as useState<Attendee[]>([]).

interface Attendee {
  id: string;
  name: string;
  email: string;
  ticketType: string; // replace with the union type from TODO 1
}

export default function App() {
  const [attendees, setAttendees] = useState<Attendee[]>([
    { id: '1', name: 'Alice',   email: 'alice@example.com',   ticketType: 'vip' },
    { id: '2', name: 'Bob',     email: 'bob@example.com',     ticketType: 'general' },
    { id: '3', name: 'Charlie', email: 'charlie@example.com', ticketType: 'speaker' },
    { id: '4', name: 'Dana',    email: 'dana@example.com',    ticketType: 'general' },
  ]);

  // TODO 3: Derive a ticketCounts object typed as Record<string, number> that counts
  //         how many attendees have each ticket type, then render it below the list.

  return (
    <div style={{ padding: "2rem", maxWidth: "500px" }}>
      <h1>Event Registry</h1>
      <ul>
        {attendees.map(a => (
          <li key={a.id}>{a.name} — {a.ticketType}</li>
        ))}
      </ul>
      {/* render ticket counts here */}
    </div>
  );
}
