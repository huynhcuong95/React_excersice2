import React, { useEffect, useState } from "react";
import usePagination from "../../components/Pagination";
import TodoList from "../../components/TodoList";
import { Pagination } from "@mui/material";
import data from "../../common/data.json";

function Home(props) {

  //construstor pros
  const { sort } = props;
  const [re,setRe]= useState(true)
  // construs
  let [page, setPage] = useState(1);
  let [dataNow, setData] = useState([]);
  const tasksListArr = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  let dataBackup = localStorage.getItem("data") ? [] : data;
  dataBackup.forEach((e) => {
    tasksListArr.push(e);
  });
  localStorage.setItem("data", JSON.stringify(tasksListArr));
  let datashow = [];
  const PER_PAGE = 5;
  const count = Math.ceil(dataNow.length / PER_PAGE);
  const _DATA = usePagination(dataNow, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  useEffect(() => {
    datashow = sort==""? tasksListArr: tasksListArr.filter((e) => e.status == sort)
    setData(datashow);
    handleChange(1, 1);

  }, [sort]);

  useEffect(()=>{
    datashow = sort==""? tasksListArr: tasksListArr.filter((e) => e.status == sort)
    setData(datashow);
  },[page])
  return (
    <div>
      <TodoList data={_DATA} />
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
}

export default Home;
