import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home";
import "./styles.scss";

Sidebar.propTypes = {};

function Sidebar(props) {
  const {handleSort} = props
  return (
    <div className="sidebar">
      <ul className="nav">
        <li className="nav__item">
          <Link to="React_excersice2/home" onClick={()=>handleSort("home")}> All Tasks</Link>
        </li>
        <li className="nav__item">
          <Link to="React_excersice2/new" onClick={()=>handleSort("new")} >New Tasks</Link>
        </li>
        <li className="nav__item">
          <Link to="React_excersice2/doing" onClick={()=>handleSort("doing")}>Doing Tasks</Link>
        </li>
        <li className="nav__item">
          <Link to="React_excersice2/done" onClick={()=>handleSort("done")}>Done Tasks</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
