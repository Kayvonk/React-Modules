// LESSON: Form Submission
// Handle form submission by calling e.preventDefault() to stop the page reload,
// then switch to a confirmation view using state.

import { useState } from 'react';

const INITIAL_FORM = { name: '', role: '', coverLetter: '' };

export default function App() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // TODO 1: Write the handleSubmit function — call e.preventDefault() to stop the
  //         browser from reloading the page, then set submitted to true.

  // TODO 2: If submitted is true, render a confirmation message that shows the
  //         applicant's name from the form state (not the form itself).

  // TODO 3: Add a "Apply for Another Role" button on the confirmation screen that
  //         resets both form and submitted back to their initial values.

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Job Application</h1>
      <form>
        <div style={{ marginBottom: "0.75rem" }}>
          <label>Your Name<br />
            <input name="name" value={form.name} onChange={handleChange} style={{ width: "100%" }} />
          </label>
        </div>
        <div style={{ marginBottom: "0.75rem" }}>
          <label>Role<br />
            <input name="role" value={form.role} onChange={handleChange} style={{ width: "100%" }} />
          </label>
        </div>
        <div style={{ marginBottom: "0.75rem" }}>
          <label>Cover Letter<br />
            <textarea name="coverLetter" value={form.coverLetter} onChange={handleChange}
              rows={4} style={{ width: "100%" }} />
          </label>
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
