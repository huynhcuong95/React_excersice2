import React, { useState } from "react";
import PropTypes from "prop-types";
import Style from "./style.css";
import FromUser from "../../FormUser/FromUser";
const TodoButtonCreate = (props) => {
  return (
    <div>
      <button onClick={props.clicka} className="btn-create">Create New Task</button>   
    </div>
  );
};

TodoButtonCreate.propTypes = {};

export default TodoButtonCreate;
