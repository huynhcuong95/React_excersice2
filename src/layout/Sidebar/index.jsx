import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

Sidebar.propTypes = {};

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="nav">
        <li className="nav__item">
          <Link to="React_excersice2/"> All Tasks</Link>
        </li>
        <li className="nav__item">
          <Link to="React_excersice2/new">New Tasks</Link>
        </li>
        <li className="nav__item">
          <Link to="React_excersice2/doing">Doing Tasks</Link>
        </li>
        <li className="nav__item">
          <Link to="React_excersice2/done">Done Tasks</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
