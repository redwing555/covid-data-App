const FETCH_FLAG_DATA = 'covid-data-app/covid/FETCH_FLAG_DATA';

export const fetchFlagData = (payload) => ({
  type: FETCH_FLAG_DATA,
  payload,
});

export const fetchDataFromApi = () => async (dispatch) => {
  const response = await fetch('https://corona.lmao.ninja/v2/countries');
  const data = await response.json();
  dispatch(fetchFlagData(data));
};

const flagReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_FLAG_DATA:
      return [...state, action.payload.dates];
    default:
      return state;
  }
};

export { flagReducer };
