import { RECEIVE_TRUCKS } from '../actions/truck_actions';

const jobsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TRUCKS:
      return Object.values(action.jobs);
    default:
      return oldState;
  }
};

export default jobsReducer;
