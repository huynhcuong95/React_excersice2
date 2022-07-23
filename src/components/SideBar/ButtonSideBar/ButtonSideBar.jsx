import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';
const ButtonSideBar = props => {
    const {txtButton} = props;
    return (
        <div>
            <button className="btn-task">{txtButton}</button>
        </div>
    );
};

ButtonSideBar.propTypes = {
    txtButton :PropTypes.string
};

export default ButtonSideBar;