import { useTab } from "@mui/base";
import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem";
import "./styles.scss";

function TodoList(props) {
  
  //constructor
  const { data } = props;

 
  
  return (
    // <div>
    //   <ul className="tasks">
    //     { dataaa && dataaa.map((item, index) => (
    //         <TodoItem item={item} key={item.id} idx={index} />
    //       ))}
    //   </ul>
    // </div>
    <div>
      <ul className="tasks">
        { data && data.currentData().map((item, index) => (
            <TodoItem item={item} key={item.id} idx={index} />
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
