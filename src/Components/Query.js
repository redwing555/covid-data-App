import React from 'react';
import Proptypes from 'prop-types';
import '../styles/query.css';

const Query = ({ handleChange }) => (
  <form className="form">
    <span className="search-by">Stats by Country</span>
    <input className="input-search" type="text" placeholder="Enter country name" onChange={handleChange} />
  </form>
);

Query.propTypes = {
  handleChange: Proptypes.func.isRequired,
};

export default Query;
