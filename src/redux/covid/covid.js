const FETCH_COVID_DATA = 'covid-data-app/covid/FETCH_COVID_DATA';
const FILTER_DATA = 'covid-data-app/covid/FETCH_DATA';

export const fetchCovidData = (payload) => ({
  type: FETCH_COVID_DATA,
  payload,
});

export const fetchFromApi = () => async (dispatch) => {
  const today = new Date().toISOString().slice(0, 10);
  const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${today}`);
  const data = await response.json();
  dispatch(fetchCovidData(data));
};

export const filterData = (payload) => ({
  type: FILTER_DATA,
  payload,
});

const covidReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COVID_DATA:
      return [...state, action.payload.dates];

    case FILTER_DATA:
      return action.payload;
    default:
      return state;
  }
};

export { covidReducer };
