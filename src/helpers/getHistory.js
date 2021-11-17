const fetchHistoryFromApi = async (country) => {
  const today = new Date();

  const startDateObject = {
    startYear: today.getFullYear(),
    startMonth: today.getMonth() + 1,
    startDate: today.getDate() - 7,
  };

  const { startYear } = startDateObject;
  const startMonth = startDateObject.startMonth.toString().length === 1 ? `0${startDateObject.startMonth}` : startDateObject.startMonth;
  const startDate = startDateObject.startDate.toString().length === 1 ? `0${startDateObject.startDate}` : startDateObject.startDate;

  const currentDateObject = {
    currentYear: today.getFullYear(),
    currentMonth: today.getMonth() + 1,
    currentDate: today.getDate() - 1,
  };

  const { currentYear } = currentDateObject;
  const currentMonth = currentDateObject.currentMonth.toString().length === 1 ? `0${currentDateObject.currentMonth}` : currentDateObject.currentMonth;
  const currentDate = currentDateObject.currentDate.toString().length === 1 ? `0${currentDateObject.currentDate}` : currentDateObject.currentDate;

  const start = `${startYear}-${startMonth}-${startDate}`;
  const current = `${currentYear}-${currentMonth}-${currentDate}`;
  const response = await fetch(`https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${start}&date_to=${current}`);
  const data = await response.json();
  return data;
};
export default fetchHistoryFromApi;
