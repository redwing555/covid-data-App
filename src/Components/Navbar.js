import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import '../styles/navbar.css';

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  /* eslint-disable  */
 
  return (
    <nav>
      <div className="location-path">
        {(location.pathname !== '/') ? <button className="back" type="button" onClick={history.goBack}><BsChevronLeft className="fas fa-chevron-left"> </BsChevronLeft></button> : <span className="back">Countries</span>}
        {' '}
        <span className="location">
          {location.pathname}
        </span>
      </div>

    </nav>
  );
   /* eslint-enable  */
};

export default Navbar;
