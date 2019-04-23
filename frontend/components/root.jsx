import React from 'react';
import { Provider } from 'react-redux';
import TrucksIndexContainer from "./trucks/trucks_index_container";

const Root = ({ store }) => (
  <Provider store={store}>
    <TrucksIndexContainer />
  </Provider>
);

export default Root;
