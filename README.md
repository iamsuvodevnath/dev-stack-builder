# Dev Stack Builder

Dev Stack Builder is a dynamic, modern web application designed for developers to explore popular software development technologies, filter them by category, and interactively build their custom tech stack.

## Tech Stack

* **Frontend:** React.js, TypeScript
* **Styling:** Tailwind CSS
* **Build Tool:** Vite
* **Notifications:** React-Toastify
* **Icons & Assets:** Devicon CDN / SVG Assets

## Key Features

## Key Features

1. **Interactive Tech Selection & Real-Time Sidebar:** Browse through curated technologies and instantly add or remove items to build your custom stack with dynamic counter tracking and empty state handling.
2. **Duplicate Detection & Toast Feedback:** Interactive feedback powered by `react-toastify` that alerts users upon adding, attempting duplicate additions, removing single items, or clearing the entire stack.
3. **Responsive Navigation & Mobile Drawer:** Modern top navigation bar featuring a branded gradient, sticky positioning on scroll, and a mobile hamburger menu dropdown for seamless browsing across all screen sizes.

---

## Technical Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside JavaScript code. It makes rendering structure declarative, readable, and easy to maintain compared to using raw `React.createElement()` calls.

### 2. What is the difference between props and state?
* **Props (Properties):** Read-only data passed from a parent component down to a child component. A child component cannot directly mutate its props.
* **State:** Internal, asynchronous data managed within a component. When state updates via its setter function, React automatically triggers a re-render of the component to reflect changes in the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook lets functional components declare and manage reactive state. In this project, `useState` was used in `App.tsx` to hold the list of `technologies`, track the user's `selectedStack`, and manage the `isLoading` state while fetching data.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in React components, such as API fetching, DOM manipulations, or subscriptions. In this project, `useEffect` was used to execute an asynchronous `fetch()` request to retrieve `/technologies.json` once when the component mounted.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React relies on unique `key` props during its reconciliation process to track which items in a list have changed, been added, or removed. This allows React to efficiently update only the changed DOM nodes instead of re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is displaying different UI elements or components depending on whether a state or boolean condition evaluates to `true` or `false`. For example, in `StackSidebar.tsx`, conditional rendering displays the empty state block when `stack.length === 0`, and renders the list of selected tech cards when items are present.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* **Parent to Child:** Data is passed down through **props** (e.g., passing `technologies` array from `App.tsx` down to `TechnologyGrid.tsx`).
* **Child to Parent:** The parent passes a callback function down as a prop (e.g., `onAdd`), and the child invokes this function with arguments (e.g., `onAdd(tech)`) to send data back up to the parent.
