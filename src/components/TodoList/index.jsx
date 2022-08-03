import React from "react";
import TodoItem from "../TodoItem";
import "./styles.scss";

function TodoList() {

  const tasksList = localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")): [];

  return (
    <ul className="tasks">
      {tasksList.length &&
        tasksList.map((item, index) => (
          <TodoItem item={item} idx={index} key={item.id} />
        ))}
    </ul>
  );
}

export default TodoList;
