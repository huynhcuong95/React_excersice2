import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { useEffect, useState } from "react";
import BoxSideBar from "./components/SideBar/BoxSideBar/BoxSideBar";
import Main from "./layout/main/main";
import Header from "./layout/header/header";

function App() {
  const [status,setstatus] = useState(true);
  const onHandle = () => {
    setstatus(!status)
  }
  return (
    <div className="main">
    <Header/>
    <Main/>
    </div>
  );
}

export default App;
