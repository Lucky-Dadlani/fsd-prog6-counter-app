# Program 6 — React Counter App with State Management

## Objective
Create a Counter component with:
- A state variable `count` initialized to 0
- Buttons to Increment, Decrement, Double, and Reset the count
- A functional component using `useState` (StateMgt.jsx)
- A class component using `this.setState` (ClassMgt.jsx)
- `useEffect` to simulate fetching initial data (Counter.jsx)

## Prerequisites
- Node.js >= 18.x
- npm >= 9.x

## Setup & Run

1. Navigate to this folder:
   ```
   cd prog6/counter-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser at: http://localhost:5173

## Project Structure
- `src/App.jsx` — Root component that renders StateMgt and ClassMgt
- `src/StateMgt.jsx` — Functional component counter using useState
- `src/ClassMgt.jsx` — Class component counter using this.setState
- `src/Counter.jsx` — Functional component using useState + useEffect
- `src/UseStateEffect.jsx` — Demo of useState with useEffect
- `src/main.jsx` — React entry point

## Key Concepts
- React useState hook
- React useEffect hook
- Class-based components with this.state and this.setState
- Event handlers in React
