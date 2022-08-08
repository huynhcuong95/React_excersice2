import React from "react";
import Button from "../Button";
import "./styles.scss";

function SearchForm(props) {

  return (
    <div className="search-form">
      <input onKeyUp={props.handle}  placeholder="Type something to search" />
      <Button title="Search" />
    </div>
  );
}

export default SearchForm;
