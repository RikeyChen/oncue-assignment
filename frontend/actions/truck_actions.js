import * as TruckApiUtil from '../util/truck_api_util';

export const RECEIVE_TRUCKS = 'RECEIVE_TRUCKS';

export const receiveTrucks = trucks => ({
  type: RECEIVE_TRUCKS,
  trucks,
});

export const fetchTrucks = () => dispatch => (
  TruckApiUtil.fetchTrucks()
    .then(trucks => (
      dispatch(receiveTrucks(trucks))
    ))
);

export const createTruck = truck => dispatch => (
  TruckApiUtil.createTruck(truck)
    .then(trucks => (
      dispatch(receiveTrucks(trucks))
    ))
);
