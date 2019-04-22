import { RECEIVE_TRUCKS } from '../actions/truck_actions';

const trucksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TRUCKS:
      return action.trucks;
    default:
      return oldState;
  }
};

export default trucksReducer;
