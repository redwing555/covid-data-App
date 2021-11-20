import { covidReducer, selectData } from '../../redux/covid/covid';

describe('reducer works !', () => {
  test('reducer returns initial state', () => {
    expect(covidReducer(undefined, {})).toEqual({ countries: {} });
  });
  test('reducer updates  state', () => {
    expect(covidReducer(undefined, selectData('Morocco'))).toEqual({ countries: {}, currentCountry: 'Morocco', loading: false });
  });
});
