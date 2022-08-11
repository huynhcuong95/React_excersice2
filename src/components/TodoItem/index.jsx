import React, { useState } from "react";
import "./styles.scss";

const ALL_STATUS = ["new", "doing", "done"];

function TodoItem({ initialItem, handleChangeStatus }) {
 
  return (
    <li key={initialItem.id}>
      <div className="task">
        <p className="task__title">Title: {initialItem.title}</p>
        <p className="task__creator">Creator: {initialItem.author}</p>
        <p className={`task__status`}>Status: {initialItem.status}</p>
        <hr className="task__break" />
        <div className="task__desc">
          <p>Description:</p>
          <p>{initialItem.description}</p>
        </div>

        <select
          className="task__select"
          onChange={(e) => handleChangeStatus(initialItem, e.target.value)}
        >
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