import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="main">
      {/* Task list */}
      <TodoList />
    </div>
  );
}

export default App;
