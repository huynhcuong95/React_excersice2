import React, { useState } from "react";
import "./styles.scss";

const ALL_STATUS = ["new", "doing", "done"];

function TodoItem({ item  }) {
 
  const taskList = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")):[];
  const [status, setStatus] = useState(item.status);
  const [items,setItems] = useState(item)
  // const changeStatus = (e) => {
  //   const currentStatus = e.target.value;
  //   setStatus(currentStatus);
  // };
  const changeStatus = (todoStatus,currentID) => {
    setItems({...items,status:todoStatus});
    fetch(`http://localhost:3030/dataa/${currentID}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    }).then((res)=>{console.log(res)}).catch((error) => {
      console.log(error);
    });
  };
  // taskList[item.id].status = status;
  // taskList.map((e,i) => {
  //   if(e.id == item.id){
  //     e.status =  status;
  //   }
    
  // });
  localStorage.setItem('data',JSON.stringify(taskList));

  return (
    <li key={item.id}>
      <div className="task">
        <p className="task__title">Title: {item.title}</p>
        <p className="task__creator">Creator: {item.author}</p>
        <p className={`task__status task__status--${status.toLowerCase()}`}>
          Status: {status}
        </p>
        <hr className="task__break" />
        <div className="task__desc">
          <p>Description:</p>
          <p>{item.description}</p>
        </div>

        <select className="task__select" onChange={() => changeStatus(status,item.id)} value={status}>
          {ALL_STATUS.map((item, idx) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </li>
  );
}

export default TodoItem;