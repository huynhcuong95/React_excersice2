import React, { useEffect, useState } from "react";
import usePagination from "../../components/Pagination";
import TodoList from "../../components/TodoList";
import { Pagination } from "@mui/material";
import data from "../../common/data.json";
import { handleData } from "../../common/common";

function Home(props) {
  //construstor pros
  const { sort,dataSearch,dataProp } = props;
  



  // construs
  let [page, setPage] = useState(1);
  let [dataNow, setData] = useState( JSON.parse(localStorage.getItem("data"))||[]);

  let datashow = [];
  const PER_PAGE = 5;
  const count = Math.ceil(dataNow.length / PER_PAGE);
  const _DATA = usePagination(dataNow, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  
  // handleData(data) return data get and set local with key "data" 
  useEffect(()=>{
    datashow = sort==""? handleData(data): handleData(data).filter((e) => e.status == sort)
    setData(datashow);
  },[page])

  useEffect(()=>{
    dataSearch && setData(dataSearch);  
  },[dataSearch])
  useEffect(() => {
    datashow = sort==""? handleData(data): handleData(data).filter((e) => e.status == sort)
    setData(datashow);
    handleChange(1, 1);
  }, [sort]);


  return (
    <div>
      <TodoList data={_DATA} />
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
}

export default Home;
