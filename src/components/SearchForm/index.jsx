import React from "react";
import Button from "../Button";
import "./styles.scss";

function SearchForm() {
  return (
    <div className="search-form">
      <input placeholder="Type something to search" />
      <Button title="Search" />
    </div>
  );
}

export default SearchForm;
