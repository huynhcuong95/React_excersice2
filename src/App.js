import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/TodoHeader/Header/Header";
import { useEffect, useState } from "react";
import BoxSideBar from "./components/SideBar/BoxSideBar/BoxSideBar";

function App() {
  const [status,setstatus] = useState(true);
  const onHandle = () => {
    setstatus(!status)
  }
  return (
    <div className="main">
      
      {/* header */}
      <Header  click={onHandle}/>
      <BoxSideBar/>
      {/* Task list */}
      
      <TodoList status={status} />
      {/* siderbar */}
    
    </div>
  );
}

export default App;
