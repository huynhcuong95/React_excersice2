import React, { useEffect, useState } from "react";
import usePagination from "../../components/Pagination";
import TodoList from "../../components/TodoList";
import { Pagination } from "@mui/material";
import data from "../../common/data.json";
import { handleData } from "../../common/common";
import { URL } from "../../constants";
function Home(props) {
  //construstor pros
  const { sort, dataSearch, dataProp } = props;
  const [taskList, setTaskList] = useState([]);

  // construs
  let [page, setPage] = useState(1);
  let [dataNow, setData] = useState([]);
  dataNow = taskList;

  // call API
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      setTaskList(data);
      // console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });


  return (
    <div>

      <TodoList/>
      {/* <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      /> */}
    </div>
  );
}

export default Home;
