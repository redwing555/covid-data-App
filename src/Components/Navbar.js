import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <nav>
      {(location.pathname !== '/') ? <button type="button" onClick={history.goBack}> button </button> : <span>Countries</span>}
      <span>{location.pathname}</span>
    </nav>
  );
};

export default Navbar;
