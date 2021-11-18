import React from 'react';
import renderer from 'react-test-renderer';
import Country from '../../Components/Country';

describe('Country', () => {
  it('renders ! ', () => {
    const tree = renderer
      .create(
        <Country
          country="Morocco"
          totalConfirmed={5}
          handleClick={() => 7 + 5}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
