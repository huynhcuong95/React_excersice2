import React from 'react';
import PropTypes from 'prop-types';
import TodoButtonCreate from '../TodoButtonCreate/TodoButtonCreate';
import TodoSearch from '../TodoSearch/TodoSearch';
import Style from './style.css';

const Header = props => {
    return (
        <div className='Header'>
            <TodoButtonCreate click={props.click}/>
            
            <TodoSearch/>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;