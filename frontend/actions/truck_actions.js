import * as TruckApiUtil from '../util/truck_api_util';

export const RECEIVE_TRUCKS = 'RECEIVE_TRUCKS';

export const receiveTrucks = payload => ({
  type: RECEIVE_TRUCKS,
  trucks: payload.trucks,
  jobs: payload.jobs,
});

export const fetchTrucks = () => dispatch => (
  TruckApiUtil.fetchTrucks()
    .then(payload => (
      dispatch(receiveTrucks(payload))
    ))
);

export const createTruck = truck => dispatch => (
  TruckApiUtil.createTruck(truck)
    .then(payload => (
      dispatch(receiveTrucks(payload))
    ))
);
