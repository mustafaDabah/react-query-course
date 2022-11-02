import Layout from "./components/Layout";
import { Routes, Route, Navigate } from 'react-router-dom';
import ComponentLang from "./ComponentLang";
import TodosList from "./features/todos/TodosList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodosList />}  />
    </Routes>
  );
}

export default App;
