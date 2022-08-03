import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const TaskForm = (props) => {
  const [formValue, setFormValue] = useState({
    title: "",
    author: "",
    description: "",
    status: "New",
  });
  const handleChangeFile = (e) => {
    console.log(e.target.value);
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
    e.preventDefault();
    if (
      formValue.title == "" ||
      formValue.author == "" ||
      formValue.description == ""
    ) {
      alert("khong được để trống");
    } else if (checkValue(formValue.title)) {
      alert("trùng");
    } else {
      let data1 = JSON.parse(localStorage.getItem("data")) || [];
      data1.push(formValue);
      console.table(formValue);
      localStorage.setItem("data", JSON.stringify(data1));
    }
  };
  return (
    <form
      onSubmit={handleChangeForm}
      method="GET"
      className="formClassContainer"
    >
      <div className="inputText">
        <label>Tittle: </label>
        <input
          type="text"
          name="title"
          onChange={handleChangeFile}
          value={formValue.title}
        ></input>
      </div>
      <div className="inputText">
        <label>Author</label>
        <input
          type="text"
          name="author"
          onChange={handleChangeFile}
          value={formValue.author}
        ></input>
      </div>
      <div className="inputText">
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={handleChangeFile}
          value={formValue.description}
        ></input>
      </div>
      <button onClick={handleChangeForm} className="buttonClass">
        Save
      </button>
    </form>
  );
};

TaskForm.propTypes = {};

export default TaskForm;
