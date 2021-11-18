import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
// import { FaMicrophone } from 'react-icons/fa';
// import { IoIosSettings } from 'react-icons/io';
import '../styles/navbar.css';

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <nav>

      <div className="location-path">
        {(location.pathname !== '/') ? <button className="back" type="button" onClick={history.goBack}><BsChevronLeft className="fas fa-chevron-left"> </BsChevronLeft></button> : <span className="back">Countries</span>}
        {' '}
        <span className="location">

          {location.pathname}
        </span>
      </div>

      {/* <div className="icons">
        <div className="icon"><FaMicrophone className="mx-2" /></div>
        <div className="icon"><IoIosSettings className="mx-2" /></div>

      </div> */}

    </nav>
  );
};

export default Navbar;
