import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Countries from './Countries';
import CountryInfo from './CountryInfo';
import { dataLoading, loadDataThunk, selectData } from '../redux/covid/covid';
import countriesNames from './countriesNames';
import '../styles/app.css';
import Footer from './Footer';

function App() {
  const countries = useSelector((state) => state.covidReducer.countries);
  const total = useSelector((state) => state.covidReducer.total);
  const load = useSelector((state) => state.covidReducer.loading);
  const currentCntry = useSelector((state) => state.covidReducer.currentCountry);
  const isoName = countriesNames[currentCntry];

  const mapImg = isoName ? `https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${isoName.toLowerCase()}/vector.svg` : '/World_map.png';
  const dispatch = useDispatch();

  const handleClick = (country) => dispatch(selectData(country));
  useEffect(() => {
    dispatch(dataLoading());
    dispatch(loadDataThunk());
  }, [dispatch]);
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Countries countries={countries} total={total} loading={load} handleClick={handleClick} />
        </Route>
        <Route exact path="/country">
          <CountryInfo current={currentCntry} image={mapImg} />
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
