import React, { useState } from "react";
import TodoItem from "../TodoItem";
import "./styles.scss";
import { Box, List, Tag, ListItem, Divider } from "@chakra-ui/core";

function TodoList(props) {
  
  //constructor
  const { data } = props;
 
  
  return (
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
