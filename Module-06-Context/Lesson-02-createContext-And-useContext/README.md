# createContext and useContext
> Module 06 · Lesson 02

## Learning Goals
- Create a context object with `createContext` and a typed default value
- Provide a value to descendants with `<Context.Provider>`
- Read a context value deep in the tree with `useContext` — no props needed
- Understand that the default value only applies when there is no matching Provider above

## What's Happening
`createContext('en')` sets the default. When `WelcomeMessage` calls `useContext(LanguageContext)`, React walks up the component tree looking for the nearest `LanguageContext.Provider`. It finds the one in `App` and returns its `value`. If there were no Provider, it would fall back to the `'en'` default.

## Your Task
Complete the 3 TODOs in `src/App.tsx`. `LanguageContext` is already created — wire up the Provider and the consumer.

## Hints

**Providing context:**
```tsx
<LanguageContext.Provider value={language}>
  {/* children can now call useContext(LanguageContext) */}
</LanguageContext.Provider>
```

**Consuming context:**
```tsx
const lang = useContext(LanguageContext);
```

**Experiment:** Temporarily remove the Provider wrapper and see that `WelcomeMessage` falls back to `'en'`.

## Run It
```bash
npm install
npm run dev
```
