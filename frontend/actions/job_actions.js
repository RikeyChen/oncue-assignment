import createJob from '../util/job_api_util';
import { receiveTrucks } from './truck_actions';

const addJob = job => dispatch => (
  createJob(job)
    .then(payload => (
      dispatch(receiveTrucks(payload))
    ))
);

export default addJob;
