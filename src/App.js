import { Routes, Route } from 'react-router-dom';
import TodosList from "./features/todos/TodosList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodosList />}  />
    </Routes>
  );
}

export default App;
