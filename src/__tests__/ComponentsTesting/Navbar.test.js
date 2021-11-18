import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter, Route } from 'react-router-dom';

import Navbar from '../../Components/Navbar';

describe('Navigation', () => {
  it('renderers route correctly', () => {
    const tree = renderer
      .create(
        <HashRouter>

          <Route path="/country">
            <Navbar />
          </Route>

        </HashRouter>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
