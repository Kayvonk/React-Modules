# Converting a Component
> Module 05 · Lesson 06

## Learning Goals
- Migrate a working `.jsx` component to `.tsx` in incremental steps
- Define a typed props interface and annotate the function signature
- Annotate all `useState` calls with explicit type generics
- Type all event handler functions and resolve TypeScript errors one at a time

## What's Happening
The component already works in JavaScript. Your job is to add TypeScript types without breaking functionality. TypeScript errors appear as red underlines — fix them one at a time, top to bottom. The component behavior should not change at all.

## Your Task
Complete the 3 TODOs in `src/App.jsx`. **Important:** TODO 1 requires renaming the file — do this in your file explorer or editor (right-click → Rename). After renaming, TypeScript will activate and you'll see errors to resolve.

## Migration Checklist
1. Rename `App.jsx` → `App.tsx`
2. Update `src/main.jsx`: change `import App from './App.jsx'` to `import App from './App'`
3. Define `CartItemProps` interface
4. Annotate `CartItem`'s parameter as `CartItemProps`
5. Add `<number>` generic to `useState(initialQty)`
6. Add `<boolean>` generic to `useState(false)`
7. Add `: void` return types to handlers (optional but good practice)

Fix errors in the order they appear — TypeScript often cascades one fix into the next.

## Run It
```bash
npm install
npm run dev
```
