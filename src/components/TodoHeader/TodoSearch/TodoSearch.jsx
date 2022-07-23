import React from "react";
import PropTypes from "prop-types";
import Style from "./style.css";
const TodoSearch = (props) => {
  return (
    <div className="box-search">
      <input type="text" placeholder="Enter search user" className="txt-input"/>
      <button className="btn-search">Search</button>
    </div>
  );
};

TodoSearch.propTypes = {};

export default TodoSearch;
