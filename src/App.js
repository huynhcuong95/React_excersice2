import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Sidebar from "./layout/Sidebar";
import "./App.css";
import TaskForm from "./components/TaskForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  let navi = useNavigate();
  let taskArr = [];
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));
  const [state, setState] = useState(taskArr);
  const [val, setVal] = useState();
  
  function search(e) {
    setVal(e.target.value);
    let valueTemp = e.target.value.toLowerCase().trim();

    let temp = JSON.parse(localStorage.getItem("data")).filter((e) => {
      let isValid =
        e.title.toLowerCase().includes(valueTemp) ||
        e.status.toLowerCase().includes(valueTemp) ;
      if (isValid) {
        return e;
      }
    });
    console.log(temp);
    setData(temp);  
    navi("React_excersice2/search");

  }

  return (
    <div className="App">
      <Header handleSearch={search} />
      <div className="container">
        <Sidebar />

        <main className="main-content">
          <Routes>
          
            <Route
              path="React_excersice2/search"
              element={<Home dataSearch={data} />}
            />
            <Route path="/React_excersice2/" element={<Home sort="" />} />
            <Route path="React_excersice2/new" element={<Home sort="new" />} />
            <Route
              path="React_excersice2/doing"
              element={<Home sort="doing" />}
            />
            <Route
              path="React_excersice2/done"
              element={<Home sort="done" />}
            />
            <Route path="React_excersice2/add" element={<TaskForm />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
