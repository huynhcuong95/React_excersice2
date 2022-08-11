import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import {URL} from "../../constants"
const TaskForm = (props) => {
  let navigate = useNavigate();
  // let data1 = JSON.parse(localStorage.getItem("data")) || [];
  // let count = data1.length;
  const [formValue, setFormValue] = useState({
    title: "",
    author: "",
    description: "",
    status: "new",
    // id: data1.length,
  });
  const handleChangeFile = (e) => {
    // console.log(e.target.value);
    //get name

    // const title = setTitleValue(e.target.value)
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  function checkValue(val) {
    let data1 = JSON.parse(localStorage.getItem("data")) || [];
    let a = 0;
    data1.forEach((e, i) => {
      if (e.title == val) {
        a++;
      }
    });
    if (a > 0) return true;
    else return false;
  }

  const handleChangeForm = (e) => {
    // console.log(formValue);
    // e.preventDefault();
    // if (
    //   formValue.title == "" ||
    //   formValue.author == "" ||
    //   formValue.description == ""
    // ) {
    //   alert("không được để trống");
    // } else if (checkValue(formValue.title)) {
    //   alert("trùng");
    // } else {

    // data1.push(formValue);


    // Call post API
    // console.log(formValue);
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));

    navigate("/React_excersice2", { replace: true });
    // }
  };

  return (
    <form onSubmit={handleChangeForm} className="formClassContainer">
      <label>Title: </label>
      <input
        type="text"
        name="title"
        value={formValue.title}
        onChange={handleChangeFile}
      ></input>
      <label>Author: </label>
      <input
        type="text"
        name="author"
        value={formValue.author}
        onChange={handleChangeFile}
      ></input>
      <label>Description: </label>
      <input
        type="text"
        name="description"
        value={formValue.description}
        onChange={handleChangeFile}
      ></input>
      <button type="submit">Save</button>
    </form>
    
  );
};

TaskForm.propTypes = {};

export default TaskForm;
