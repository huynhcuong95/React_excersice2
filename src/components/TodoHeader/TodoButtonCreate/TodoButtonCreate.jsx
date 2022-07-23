import React, { useState } from "react";
import PropTypes from "prop-types";
import Style from "./style.css";
import FromUser from "../../FormUser/FromUser";
const TodoButtonCreate = (props) => {
  return (
    <div>
      <button onClick={props.click} className="btn-create">Button Create Add</button>      
    </div>
  );
};

TodoButtonCreate.propTypes = {};

export default TodoButtonCreate;
