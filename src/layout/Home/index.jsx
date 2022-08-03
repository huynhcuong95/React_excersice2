import React from "react";
import Pagination from "../../components/Pagination";
import TodoList from "../../components/TodoList";

function Home() {
  return (
    <div>
      <TodoList />
      <Pagination />
    </div>
  );
}

export default Home;
