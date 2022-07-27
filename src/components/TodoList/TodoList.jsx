import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";
import FromUser from "../FormUser/FromUser";
import data from "../../data";
import Style from "./style.css";
const dataItem = data()==""?[]:[...data()];//spread (sytax bảo toàn data)
const arr = [];
const arri = [];
  dataItem.forEach((e,i)=>{
    if((i+1)%12==0&&i!=0){
      arr.push(dataItem.slice(i-11,i+1));
      arri.push(arr.length);
      // console.log(arr);
      // console.log(arri);
    }else if(i+1==dataItem.length){
      if((i+1)%12!==0){
        arr.push(dataItem.slice(i+1-((i+1)%12)));
        arri.push(arr.length);
        // console.log(arr);
        // console.log(arri);
      }
    }
  })
  arr.forEach((e,i)=>{
    e.forEach((a,index)=>{
      a.taskButton1 = a.stt=="New"?"Start":(a.stt=="Doing"?"Done":'Renew');
    })
  })
  console.log(arr);
const TodoList = (props) => {
  const [page,setPage] = useState(0);
  const [update,setUpdate] = useState(true);
  // get index for array and set index for array 
  function changePage(e){
    //  console.log(e.target.innerText);
    console.log(e);
    setPage((e.target.innerText - 1))
    document.querySelectorAll('.button_page button').forEach((el,i)=>{
      el.classList.remove('active');
      console.log(el);
    })
    e.target.classList.add("active");
  }

  function onHandle(e){
    // console.log(e.target.id);
    console.log(arr[page][e.target.id]); 


    arr[page].forEach((el,i)=>{
      if(i==e.target.id){
        if(el.stt=='New'){
          el.stt='Doing';
          el.taskButton1="Done"
        }else if(el.stt=='Doing'){
          el.stt='Done'
          el.taskButton1="Renew"
        }else {
          el.stt='New'
          el.taskButton1="Start"
        }
        // console.log(el);
      }

    })
    setUpdate(!update);
    }

  return (
    <div className="content">
       
      <div
        style={{ display:'flex',
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
       {
        arr[page].map((Edata,i)=>
          <TodoItem iid ={i} handle={onHandle} key={i} taskName={Edata.title} taskAuthor={Edata.name} taskDesc={Edata.mess} taskText={Edata.stt} taskButton={Edata.taskButton1}/>
        ) 
       }
      </div>
      <div className="button_page">
        {
          arri.map((e,i)=>
            <button onClick={changePage} key={i}>{e}</button>
          )
        }
      </div>
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
