import React from "react";
import "./styles.scss";
import Button from "../../components/Button";
import SearchForm from "../../components/SearchForm";
import { Link } from "react-router-dom";

function Header(props) {

  return (
    <div className="main-header">
      <Link to="React_excersice2/add">   <Button title="Create New Task" /></Link>
    
      <SearchForm handle={props.handleSearch}  />
    </div>
  );
}

export default Header;
