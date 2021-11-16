import React from 'react';
import Proptypes from 'prop-types';

const Query = ({ handleChange }) => (
  <form>
    <span>By country</span>
    <input type="text" placeholder="search by country name" onChange={handleChange} />
  </form>
);

Query.propTypes = {
  handleChange: Proptypes.func.isRequired,
};

export default Query;
