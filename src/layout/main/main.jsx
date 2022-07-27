import React, { useState } from "react";
import PropTypes from "prop-types";
import Header_compo from "../../components/TodoHeader/header_compo";
import BoxSIdeBar from "../../components/SideBar/BoxSideBar/BoxSideBar";
import TodoList from "../../components/TodoList/TodoList";

const Main = (props) => {
    const [status, setstatus] = useState(true);
    const onHandle = () => {
    setstatus(!status);
    console.log(onHandle);
  };

  return (
    <div id="content">
      <BoxSIdeBar />
      {/* Task list */}

      <TodoList/>
      {/* siderbar */}
    </div>
  );
};

Main.propTypes = {};

export default Main;
