import React from "react";
import Pagination from "../../components/Pagination";
import TodoList from "../../components/TodoList";

function Home(props) {
  const {sort} = props;
  return (
    <div>
      <TodoList sort={sort} />
      <Pagination />
    </div>
  );
}

export default Home;
