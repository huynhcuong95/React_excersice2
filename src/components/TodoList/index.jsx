import React from "react";
import TodoItem from "../TodoItem";
import "./styles.scss";

function TodoList(props) {
  const {sort} = props;
  const tasksListArr = localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")): [];
  let datashow = [];
  if(sort==""){
    datashow = tasksListArr;
  }else {
    datashow = tasksListArr.filter((e) => e.status==sort);
  }
 
  return (
    <ul className="tasks">
      {datashow.length && 

        datashow.map((item, index) => (
          <TodoItem item={item} idx={index} key={item.id} />
        ))}
    </ul>
  );
}

export default TodoList;
