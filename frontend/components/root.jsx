import React from 'react';
import { Provider } from 'react-redux';
import TrucksIndexContainer from './trucks/trucks_index_container';
import CreateTruckContainer from './trucks/create_truck_container';
import CreateJobContainer from './jobs/create_job_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <CreateTruckContainer />
    <CreateJobContainer />
    <TrucksIndexContainer />
  </Provider>
);

export default Root;
