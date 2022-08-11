import { useTab } from "@mui/base";
import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem";
import { URL } from "../../constants";
import "./styles.scss";
import usePagination from "../../components/Pagination";
import { Pagination } from "@mui/material";


function TodoList(props) {
    // construs
    let {dataSearch,sort} = props
    let [page, setPage] = useState(1);
    let [dataNow, setData] = useState([]);
 

  //constructor
  const { data } = props;
  const [taskList, setTaskList] = useState([]);
  useEffect(()=>{setTaskList(dataSearch)},[dataSearch])

  dataNow = taskList;

    // console.log(dataNow.length);
    const PER_PAGE = 8;
    const count = Math.ceil(dataNow.length / PER_PAGE);
    const _DATA = usePagination(dataNow, PER_PAGE);
    console.log(_DATA);
    const handleChange = (e, p) => {
      setPage(p);
      _DATA.jump(p);
    };
    const currentData = taskList.slice(
      (page - 1) * PER_PAGE,
      (page - 1) * PER_PAGE + PER_PAGE
    );
  // Get task list API
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setTaskList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changeItemStatus = (selectedItem, changedStatus) => {
    // call fetch API PUT update
    fetch(`${URL}/${selectedItem.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ ...selectedItem, status: changedStatus }),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedTaskList = taskList.map((obj) => {
          if (obj.id === selectedItem.currentId) {
            obj.status = changedStatus;
            return obj;
          }

          return obj;
        });

        setTaskList(updatedTaskList);
      })
      .catch((error) => {
        console.log(error);
      });
  };
   // handleData(data) return data get and set local with key "data" 

  

// console.log(datashow);
  return (
    <>

      <ul className="tasks">
        {currentData.length > 0 &&
          currentData.map((item, index) => (
            <TodoItem
              initialItem={item}
              key={index}
              handleChangeStatus={changeItemStatus}
            />
          ))}
      </ul>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </>
  );
}

export default TodoList;
