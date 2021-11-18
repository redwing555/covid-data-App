import fetchHistoryFromApi from '../../helpers/getHistory';

describe('fetching from api', () => {
  test('data type', async () => {
    const data = await fetchHistoryFromApi();
    expect(data).toBeInstanceOf(Object);
  });
  test('data contains object indeed', async () => {
    const data = await fetchHistoryFromApi();
    expect.objectContaining(data);
  });

  test('data have property dates', async () => {
    const data = await fetchHistoryFromApi();
    expect(data).toHaveProperty('dates');
  });
});
