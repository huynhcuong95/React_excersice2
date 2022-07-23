import React from 'react';
import PropTypes from 'prop-types';
import ButtonSideBar from '../ButtonSideBar/ButtonSideBar';
import Style from "./style.css";
const BoxSIdeBar = props => {
    return (
        <div className="box-sideBar">
            <ButtonSideBar txtButton="All Task"/>
            <ButtonSideBar txtButton="New Task"/>
            <ButtonSideBar txtButton="Doing Task"/>
            <ButtonSideBar txtButton="Done Task"/>
        </div>
    );
};

BoxSIdeBar.propTypes = {
    
};

export default BoxSIdeBar;