import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Sidebar from "./layout/Sidebar";
import "./App.css";
import TaskForm from "./components/TaskForm";
import { useState } from "react";
function App() {
  let taskArr = [];
  const [state,setState] =  useState(taskArr)

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="React_excersice2/" element={<Home sort=''/> } />
            <Route path="React_excersice2/new" element={<Home sort='new'/>  } />
            <Route path="React_excersice2/doing" element={<Home sort='doing'/>  } />
            <Route path="React_excersice2/done" element={<Home sort='done'/>  } />
            <Route path="React_excersice2/add" element={<TaskForm />}/>
          </Routes>
          
        </main>
      </div>
    </div>
  );
}

export default App;
