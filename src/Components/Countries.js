import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Country from './Country';
import Query from './Query';

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
      <span>
        {' '}
        {total && Intl.NumberFormat('de-DE').format(total.today_confirmed) }
      </span>
      <Query handleChange={handleChange} />
      {loading && <span>...loading</span> }
      <ul>
        {filtered && filtered.map((key) => (
          (key !== 'Kosovo')
              && (
              <li key={key}>
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
