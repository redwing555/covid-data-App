import React, { useEffect, useState } from 'react';
import {
  useHistory, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Plot from './Plot';
import { dataLoading, loadHistoryThunk } from '../redux/covid/covid';

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
      value: country.today_new_death,
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
      category: 'Confirmed_cases',
    },
    {
      id: 5,
      text: 'Confirmed number of Death',
      value: country.today_death,
      url: 'confirmedDeaths',
      category: 'confirmed_deaths',
    },
    {
      id: 6,
      text: 'Confirmed recoveries',
      value: country.today_recovered,
      url: 'ConfirmedRecoveries',
      category: 'confirmed_recoveries',
    },

  ];

  const [plotData, setPlotData] = useState([]);
  const history = useHistory();
  const { path, url } = useRouteMatch();

  const handleRoute = (route) => {
    console.log(country);
    history.push(route);
  };

  const handlePlotData = (category) => {
    console.log(historyData);
    const data = Object.keys(historyData)
      .map((date) => historyData[date].countries[current][category]);
    setPlotData(data);
  };

  useEffect(() => {
    dispatch(dataLoading());
    dispatch(loadHistoryThunk(current));
  }, [dispatch]);

  return (
    <div className="info-container">
      <div className="info-header">
        <img alt="map" src={image} />
        <h1 className="data-date">{country.date}</h1>
        <span className="total-cases">{total && Intl.NumberFormat('de-DE').format(total)}</span>
        <span className="country-info-name">{current}</span>
      </div>

      <div>
        <span> Date </span>
        <div>hello</div>
      </div>
      <Switch>
        <Route exact path={path}>
          <div>
            <span> Latest data </span>

          </div>
          <ul className="table-infos">
            <li className="table-header">
              <div>Date</div>
              <div>{country.date}</div>
            </li>

            {loading && rows.map((row) => (

              <li
                className="country-details"
                key={row.id}
                onClick={() => {
                  handleRoute(`${url}/${row.url}`);
                  handlePlotData(row.category);
                }}
                aria-hidden="true"
              >

                <div>{row.text}</div>
                <div>{row.value}</div>
              </li>
            ))}
          </ul>

        </Route>
        <Route exact path={`${path}/newDailyCases`}>
          <Plot plotData={plotData} country={current} title="new Cases" />
        </Route>
        <Route exact path={`${path}/newDailyDeaths`}>
          <Plot plotData={plotData} country={current} title="new Deaths" />
        </Route>
        <Route exact path={`${path}/newDailyRecovered`}>
          <Plot plotData={plotData} country={current} title="new Recoveries" />
        </Route>
        <Route exact path={`${path}/confirmedCases`}>
          <Plot plotData={plotData} country={current} title="today new Cases" />
        </Route>
        <Route exact path={`${path}/confirmedDeaths`}>
          <Plot plotData={plotData} country={current} title="today new Deaths" />
        </Route>
        <Route exact path={`${path}/confirmedRecoveries`}>
          <Plot plotData={plotData} country={current} title="today new Recoveries" />
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
