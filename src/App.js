import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Sidebar from "./layout/Sidebar";
import "./App.css";
import TaskForm from "./components/TaskForm";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "./components/TodoList";
import { URL } from "./constants";
function App() {
  let navi = useNavigate();
  let taskArr = [];
  // const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));

  const [state, setState] = useState(taskArr);
  const [val, setVal] = useState();
  const [data, setData] = useState([]);
  const [fData, setFData] = useState([]);

  const fectData = useCallback(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setFData(data))
      .catch();
  }, [URL]);
  useEffect(() => {
    fectData();
  }, [fectData]);
  useEffect(() => {
    setFData(fData);
  }, [fData]);

  function search(e) {
    console.log(fData);
    setVal(e.target.value);
    let valueTemp = e.target.value.toLowerCase().trim();

    let temp = fData.filter((e) => {
      let isValid =
        e.title.toLowerCase().includes(valueTemp) ||
        e.status.toLowerCase().includes(valueTemp);
      if (isValid) {
        return e;
      }
    });
    console.log(temp);
    setData(temp);
    navi("React_excersice2/search");
  }

  const handleSort = (e) => {
    switch (e) {
      case "home":
        setData(fData);
        break;
      case "new":
        let neww = fData.filter((el) => el.status == e && el);
        setData(neww);
        break;
      case "doing":
        let newl = fData.filter((el) => el.status == e && el);
        setData(newl);
        break;
      case "done":
        let newk = fData.filter((el) => el.status == e && el);
        setData(newk);
        break;
      default:
        break;
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="App">
      <Header handleSearch={search} />
      <div className="container">
        <Sidebar handleSort={handleSort} />

        <main className="main-content">
          <Routes>
            <Route
              path="React_excersice2/search"
              element={<TodoList dataSearch={data} />}
            />
            <Route
              path="/React_excersice2/home"
              element={<TodoList c dataSearch={data} />}
            />
            <Route
              path="React_excersice2/new"
              element={<TodoList handleSort={handleSort} dataSearch={data} />}
            />
            <Route
              path="React_excersice2/doing"
              element={<TodoList handleSort={handleSort} dataSearch={data} />}
            />
            <Route
              path="React_excersice2/done"
              element={<TodoList handleSort={handleSort} dataSearch={data} />}
            />
            <Route path="React_excersice2/add" element={<TaskForm />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
