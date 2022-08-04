import React from "react";
import "./styles.scss";
import Button from "../../components/Button";
import SearchForm from "../../components/SearchForm";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="main-header">
      <Link to="examples-app/add">   <Button title="Create New Task" /></Link>
    
      <SearchForm />
    </div>
  );
}

export default Header;
