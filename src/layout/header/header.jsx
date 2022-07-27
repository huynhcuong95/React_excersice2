import React, { useState } from "react";
import PropTypes from "prop-types";
import Header_compo from "../../components/TodoHeader/header_compo";
import FromUser from "../../components/FormUser/FromUser";

const Header = () => {
  const [status, setstatus] = useState(true);
  const onHandle = () => {
    setstatus(!status);
    document.getElementById('content').style.display= !status ? 'block':'none';
  };
  return <div>
    
    {/* Header */}
  <Header_compo  clickk={onHandle}/>
  <FromUser status={status}/>
  </div>;
};

Header.propTypes = {};

export default Header;
