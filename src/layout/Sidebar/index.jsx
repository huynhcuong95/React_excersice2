import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

Sidebar.propTypes = {};

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="nav">
        <li className="nav__item">
          <Link to="/"> All Tasks</Link>
        </li>
        <li className="nav__item">
          <Link to="/new">New Tasks</Link>
        </li>
        <li className="nav__item">
          <Link to="/doing">Doing Tasks</Link>
        </li>
        <li className="nav__item">
          <Link to="/done">Done Tasks</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
