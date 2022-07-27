import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Style from './style.css'
const TodoItem = props => {
    const {taskName,taskAuthor, taskStatus,taskDesc , taskText, taskButton} = props;

    //Hook
    const [status,setStatus] = useState('Start');
    
    return (
        <div className='task-item'>
            <h1 className='title'>Title: {taskName}</h1>
            <p className='author'>Creator: {taskAuthor}</p>
            <p className={taskText} >Status : {taskText}</p>
            <p className='desc'>Description:<br/><span>{taskDesc}</span></p>
            <button  onClick={props.handle} className='btn'><span id={props.iid}>{taskButton}</span></button>
           
        </div>
    );
};

TodoItem.propTypes = {
    taskName: PropTypes.string,
    taskAuthor:PropTypes.string,
    taskStatus: PropTypes.string,
    taskDesc : PropTypes.string,
    // taskButton:PropTypes.string
};

TodoItem.defaultProps = {
    taskName:'Task Name',
    taskAuthor:'Cuong',
    taskStatus:'New',
    taskDesc: 'This a task',
    // taskButton:'Start'
}



export default TodoItem;