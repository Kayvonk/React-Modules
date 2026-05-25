// LESSON: createContext and useContext
// createContext creates a context object. Provider supplies a value to the tree.
// useContext reads it from anywhere below — no prop threading required.

import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'fr';

const GREETINGS: Record<Language, string> = {
  en: 'Hello!',
  es: '¡Hola!',
  fr: 'Bonjour!',
};

// TODO 1: Create a LanguageContext using createContext with a default value of 'en'.
//         Give it the correct type so TypeScript knows it holds a Language.

const LanguageContext = createContext<Language>('en');

function WelcomeMessage() {
  // TODO 2: Call useContext(LanguageContext) to read the current language.

  const language = 'en'; // replace with useContext call

  // TODO 3: Use the language value to look up the greeting from GREETINGS and render it.

  return <p>Greeting goes here</p>;
}

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    // TODO 1 (continued): Wrap the content in <LanguageContext.Provider value={language}>.
    <div style={{ padding: "2rem" }}>
      <h1>Language Preference</h1>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('es')}>Español</button>
        <button onClick={() => setLanguage('fr')}>Français</button>
      </div>
      <WelcomeMessage />
    </div>
  );
}
