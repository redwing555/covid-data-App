import React, { useEffect, useState } from 'react';
import {
  useHistory, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import LineChart from './Plot';
import { dataLoading, loadHistoryThunk } from '../redux/covid/covid';
import '../styles/countryInfo.css';

const CountryInfo = ({ current, image }) => {
  const dispatch = useDispatch();
  const historyData = useSelector((state) => state.covidReducer.currentHistory);

  const loading = useSelector((state) => state.covidReducer.loading);
  const country = useSelector((state) => state.covidReducer.countries[current]);
  const total = country.today_confirmed;

  const rows = [
    {
      id: 1,
      text: 'Confirmed daily cases',
      value: country.today_new_confirmed,
      url: 'newDailyCases',
      category: 'today_new_confirmed',
    },
    {
      id: 2,
      text: 'Confirmed daily deaths',
      value: country.today_new_deaths,
      url: 'newDailyDeaths',
      category: 'today_new_deaths',
    },
    {
      id: 3,
      text: 'Confirmed daily Recovered',
      value: country.today_new_recovered,
      url: 'newDailyRecovered',
      category: 'today_new_recovered',
    },
    {
      id: 4,
      text: 'Confirmed number of Cases',
      value: country.today_confirmed,
      url: 'confirmedCases',
      category: 'today_confirmed',
    },
    {
      id: 5,
      text: 'Confirmed number of Death',
      value: country.today_deaths,
      url: 'confirmedDeaths',
      category: 'today_deaths',
    },
    {
      id: 6,
      text: 'Confirmed recoveries',
      value: country.today_recovered,
      url: 'confirmedRecoveries',
      category: 'today_recovered',
    },

  ];

  const [plotData, setPlotData] = useState([]);
  const history = useHistory();
  const { path, url } = useRouteMatch();

  const handleRoute = (route) => {
    history.push(route);
  };

  const handlePlotData = (category) => {
    const data = Object.keys(historyData).map((date) => {
      const tmp = historyData[date].countries[current][category];
      return tmp;
    });
    setPlotData(data);
  };

  useEffect(() => {
    dispatch(dataLoading());
    dispatch(loadHistoryThunk(current));
  }, [dispatch]);

  return (
    <div className="info-container">
      <div className="header-wrapper">
        <div className="world-header">
          <img className="country-map-header" src={image} alt="world map" />

        </div>
        <div className="country-header-info">
          <span className="world-cases">{current}</span>
          <span>
            {' '}
            {total && Intl.NumberFormat('de-DE').format(total)}
            {' '}
            Cases

          </span>

        </div>

      </div>

      <Switch>
        <Route exact path={path}>
          <div className="data-of-wrapper">
            <span className="data-of">
              {' '}
              Stats of
              {' '}
              {country.date}
              {' '}
              for
              {' '}
              {current}
              {' '}
            </span>

          </div>
          <ul className="table-infos">
            <li className="table-header">
              <div className="date">Date</div>
              <div className="date-value">{country.date}</div>
            </li>
            {loading && <span>Getting data for you ... </span>}
            {!loading && rows.map((row) => (

              <li
                className="country-details"
                key={row.id}
                onClick={() => {
                  handleRoute(`${url}/${row.url}`);
                  handlePlotData(row.category);
                }}
                aria-hidden="true"
              >

                <div className="metric">{row.text}</div>
                <div className="metric-value">{row.value}</div>
              </li>
            ))}
          </ul>

        </Route>
        <Route plotData={plotData} exact path={`${path}/newDailyCases`}>
          <LineChart plotData={plotData} country={current} title="new Cases" />
        </Route>
        <Route plotData={plotData} exact path={`${path}/newDailyDeaths`}>
          <LineChart plotData={plotData} country={current} title="new Deaths" />
        </Route>
        <Route exact path={`${path}/newDailyRecovered`}>
          <LineChart plotData={plotData} country={current} title="new Recoveries" />
        </Route>
        <Route exact path={`${path}/confirmedCases`}>
          <LineChart plotData={plotData} country={current} title="today new Cases" />
        </Route>
        <Route exact path={`${path}/confirmedDeaths`}>
          <LineChart plotData={plotData} country={current} title="today new Deaths" />
        </Route>
        <Route exact path={`${path}/confirmedRecoveries`}>
          <LineChart plotData={plotData} country={current} title="today new Recoveries" />
        </Route>
      </Switch>

    </div>
  );
};

CountryInfo.defaultProps = {
  current: 'No Country',
};

CountryInfo.propTypes = {
  current: PropTypes.string,
  image: PropTypes.string.isRequired,

};

export default CountryInfo;
