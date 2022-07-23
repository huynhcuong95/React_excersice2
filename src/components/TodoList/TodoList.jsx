import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";
import FromUser from "../FormUser/FromUser";
const TodoList = (props) => {
  return (
    <div className="content">
      <div style={{ display: props.status ? "flex" : "none" ,
       flexWrap: "wrap",justifyContent:'space-between' }}>
        <TodoItem
          taskName="Task 1"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
        <TodoItem
          taskName="Task 2"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
        <TodoItem
          taskName="Task 3"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
        <TodoItem
          taskName="Task 4"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
        <TodoItem
          taskName="Task 5"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
        <TodoItem
          taskName="Task 6"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
        <TodoItem
          taskName="Task 7"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
        <TodoItem
          taskName="Task 8"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
        <TodoItem
          taskName="Task 9"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
        <TodoItem
          taskName="Task 10"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
        <TodoItem
          taskName="Task 11"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
        <TodoItem
          taskName="Task 12"
          taskAuthor="Athour"
          taskDesc="This is a task, This is a task, This is a task, This..."
        />
      </div>
      <div style={{ display: props.status ? "none" : "block" }}>
        <FromUser />
      </div>
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
