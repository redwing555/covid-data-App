import { fetchCountriesFromApi } from '../../helpers/getData';

describe('fetching from api', () => {
  test('data type', async () => {
    const data = await fetchCountriesFromApi();
    expect(data).toBeInstanceOf(Object);
  });
  test('data contains object indeed', async () => {
    const data = await fetchCountriesFromApi();
    expect.objectContaining(data);
  });

  test('data have property countries', async () => {
    const data = await fetchCountriesFromApi();
    expect(data).toHaveProperty('countries');
  });
});
