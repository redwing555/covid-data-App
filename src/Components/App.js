import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Countries from './Countries';
import { dataLoading, loadDataThunk, selectData } from '../redux/covid/covid';

function App() {
  const countries = useSelector((state) => state.covidReducer.countries);
  const total = useSelector((state) => state.covidReducer.total);
  const load = useSelector((state) => state.covidReducer.loading);
  const dispatch = useDispatch();

  const handleClick = (country) => dispatch(selectData(country));
  useEffect(() => {
    dispatch(dataLoading());
    dispatch(loadDataThunk());
  });
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Countries countries={countries} total={total} loading={load} handleClick={handleClick} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
