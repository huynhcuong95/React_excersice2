import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Style from './style.css'
const TodoItem = props => {
    const {taskName,taskAuthor, taskStatus,taskDesc} = props;

    //Hook
    const [status,setStatus] = useState('Start');
    const [text,setText] = useState('New');
    const [color,setColor] = useState('#04BE00')
    function changeText(){
        if(status==='Start'&&text==='New'){
            setStatus('Done')
            setText('Doing')
            setColor('#F88F14')
        }else  if(status==='Done'&&text==='Doing'){
            setStatus('Renew')
            setText('Done')
            setColor('#675BF1')
        }
    }
    
    return (
        <div className='task-item'>
            <h1 className='title'>Title: {taskName}</h1>
            <p className='author'>Creator: {taskAuthor}</p>
            <p className='status' style={{ color: color }}>Status : {text}</p>
            <p className='desc'>Description:<br/><span>{taskDesc}</span></p>
            <button onClick={changeText} className='btn'><span>{status}</span></button>
           
        </div>
    );
};

TodoItem.propTypes = {
    taskName: PropTypes.string,
    taskAuthor:PropTypes.string,
    taskStatus: PropTypes.string,
    taskDesc : PropTypes.string
};

TodoItem.defaultProps = {
    taskName:'Task Name',
    taskAuthor:'Cuong',
    taskStatus:'New',
    taskDesc: 'This a task'
}



export default TodoItem;