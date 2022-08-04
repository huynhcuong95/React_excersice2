import React, { useState } from "react";
import "./styles.scss";

const ALL_STATUS = ["new", "doing", "done"];

function TodoItem({ item, value },props) {
  const taskList = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")):[];
  const [status, setStatus] = useState(item.status);
  const changeStatus = (e) => {
    const currentStatus = e.target.value;
    setStatus(currentStatus);
  };
  taskList[item.id].status = status;
  localStorage.setItem('data',JSON.stringify(taskList));
  return (
    <li key={item.id}>
      <div className="task">
        <p className="task__title">Titlqe: {item.title}</p>
        <p className="task__creator">Creator: {item.creator}</p>
        <p className={`task__status task__status--${status.toLowerCase()}`}>
          Status: {status}
        </p>
        <hr className="task__break" />
        <div className="task__desc">
          <p>Description:</p>
          <p>{item.description}</p>
        </div>

        <select className="task__select" onChange={changeStatus}>
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
