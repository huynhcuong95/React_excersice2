import React from 'react';
import PropTypes from 'prop-types';
import TodoButtonCreate from './TodoButtonCreate/TodoButtonCreate';
import TodoSearch from './TodoSearch/TodoSearch';
import Style from './style.css'
const Header_compo = props => {
    return (
       
        <div className='Header'>
            <TodoButtonCreate clicka={props.clickk}/>
            <TodoSearch/>
        </div>
    );
};

Header_compo.propTypes = {
    
};

export default Header_compo;

