import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Country = ({ country, totalConfirmed, handleClick }) => {
  const history = useHistory();
  const handleRoute = (route) => {
    history.push(route);
  };
  return (
    <button
      type="button"
      onClick={() => {
        handleRoute('/country');
        handleClick(country);
      }}
    >

      <div>
        <span>{country}</span>
        <span>{Intl.NumberFormat('de-DE').format(totalConfirmed)}</span>
      </div>
    </button>
  );
};

Country.propTypes = {
  country: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Country;
