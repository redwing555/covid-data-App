import React from 'react';
import renderer from 'react-test-renderer';
import Countries from '../../Components/Countries';

const mockedData = {
  Morocco: {
    new_cases: 485,
    death: 4,
    today_confirmed: 5645,
  },
  Algeria: {
    new_cases: 45,
    death: 5,
    today_confirmed: 545,
  },
};

const mockedTotalCases = {
  today_confirmed: 33868,
  today_new_confirmed: 6753375,
  today_deaths: 575238,
};

describe('Countries', () => {
  it('renders ! ', () => {
    const tree = renderer
      .create(
        <Countries
          countries={mockedData}
          total={mockedTotalCases}
          loading={false}
          handleClick={() => 7 + 5}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
