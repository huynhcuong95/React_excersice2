import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
  return (
    <div className="content">
      <TodoItem taskName="Task 1" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
      <TodoItem taskName="Task 2" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
      <TodoItem taskName="Task 3" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
      <TodoItem taskName="Task 4" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
      <TodoItem taskName="Task 5" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
      <TodoItem taskName="Task 6" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
      <TodoItem taskName="Task 7" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
      <TodoItem taskName="Task 8" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
      <TodoItem taskName="Task 9" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
      <TodoItem taskName="Task 10" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
      <TodoItem taskName="Task 11" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
      <TodoItem taskName="Task 12" taskAuthor="Athour" taskDesc="This is a task, This is a task, This is a task, This..." />
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
