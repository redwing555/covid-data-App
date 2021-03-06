import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BiChevronRightCircle } from 'react-icons/bi';
import countriesNames from './countriesNames';
import '../styles/country.css';

const Country = ({
  country, totalConfirmed, handleClick,
}) => {
  const history = useHistory();
  const handleRoute = (route) => {
    history.push(route);
  };
  const isoName = countriesNames[country];

  const mapImg = isoName ? `https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${isoName.toLowerCase()}/vector.svg` : '/World_map.png';
  return (
    <>
      <button
        className="country"
        type="button"
        onClick={() => {
          handleRoute('/country');
          handleClick(country);
        }}
      >
        <img className="country-map" alt="map" src={mapImg} width="100" height="100" />
        <div className="country-data">
          <BiChevronRightCircle size={20} className="info-icon" color="white" />
          <h1 className="country-name">{country.toUpperCase()}</h1>
          <span className="total-confirmed">{Intl.NumberFormat('de-DE').format(totalConfirmed)}</span>
        </div>
      </button>
    </>

  );
};

Country.propTypes = {
  country: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Country;
