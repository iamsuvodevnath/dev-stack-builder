# Dev Stack Builder

Dev Stack Builder is an interactive web application designed for developers to explore modern software development technologies, compare tools across multiple categories, and build a custom tech stack for their next project.

## Technologies Used

- **React.js** (Component-driven UI library)
- **TypeScript** (Static typing)
- **Tailwind CSS** (Utility-first styling framework)
- **Vite** (Next-generation frontend tooling)
- **React-Toastify** (Toast alerts for state changes)

## Core Features

1. **Dynamic Technology Grid:** Browse a responsive grid of technologies with difficulty chips, ratings, and category badges loaded asynchronously from JSON.
2. **Interactive Stack Management:** Add technologies to a dedicated sidebar stack with real-time duplicate checking and button state updates.
3. **Toast Notifications:** Instant visual alerts when adding items, attempting duplicate additions, removing single items, or clearing the entire stack.

---

## React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript files. It makes writing user interfaces easier and more visual by combining markup and logic in the same component.

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed from a parent component down to a child component. They cannot be modified by the receiving component.
- **State:** Mutable data managed internally within a component. When state changes, React re-renders the component to update the UI.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to create and manage local reactive state. In this project, `useState` was used in `App.tsx` to store the list of technologies (`technologies`), track the user's selected stack items (`selectedStack`), and manage the fetching state (`loading`).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in React components, such as data fetching, subscriptions, or DOM mutations. In this project, `useEffect` was needed to trigger an asynchronous `fetch()` request to load `/technologies.json` once when the component initially mounts.

### 5. Why does every item in a .map() list need a unique key prop?
React relies on unique `key` props to track, identify, and efficiently update individual elements within dynamic lists. Without unique keys, React cannot accurately determine which specific items were added, removed, or modified during re-renders.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is the practice of displaying different UI elements based on specific conditions or state values. In `App.tsx`, it was used to display the loading spinner while fetching data, or render the grid once loaded:

```tsx
{loading ? (
  <div>Loading technologies...</div>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">...</div>
)}