import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Country from './Country';
import Query from './Query';
import '../styles/countries.css';

const Countries = ({
  countries, total, loading, handleClick,
}) => {
  const [filtered, setFiltered] = useState(Object.keys(countries));

  const filterCountries = (expression) => Object.keys(countries).filter((country) => {
    const regex = new RegExp(expression, 'gi');
    return country.match(regex);
  });

  const handleChange = (event) => setFiltered(filterCountries(event.target.value));

  useEffect(() => {
    setFiltered(Object.keys(countries));
  }, [countries]);

  return (
    <div>
      <div className="header-wrapper">
        <div className="world-header">
          <img className="world-map" src="/worldmap.svg" alt="world map" />
        </div>
        <div className="world-info">
          <span className="world-cases">The world has </span>
          <span>
            {' '}
            {total && Intl.NumberFormat('de-DE').format(total.today_confirmed) }
          </span>
          <span className="world-cases">Coronavirus Cases </span>

        </div>

      </div>

      <Query handleChange={handleChange} />
      {loading && <span>...loading</span> }
      <ul className="countries-list">
        {filtered && filtered.map((key) => (
          (key !== 'Casablanca')
              && (
              <li key={key} className="countries">
                <Country
                  country={key}
                  totalConfirmed={countries[key].today_confirmed}
                  handleClick={handleClick}
                />
              </li>
              )
        ))}
      </ul>
      {!filterCountries.length && !loading && <span>Sorry</span>}
    </div>
  );
};

Countries.defaultProps = {
  loading: true,
  total: {},
};

Countries.propTypes = {
  countries: PropTypes.objectOf(PropTypes.object).isRequired,
  total: PropTypes.shape({
    today_confirmed: PropTypes.number,
  }),
  handleClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,

};

export default Countries;
