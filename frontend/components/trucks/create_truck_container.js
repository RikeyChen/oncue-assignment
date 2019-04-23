import { connect } from 'react-redux';
import { createTruck } from '../../actions/truck_actions';
import CreateTruck from './create_truck';

const mapDispatchtoProps = dispatch => ({
  createTruck: truck => dispatch(createTruck(truck)),
});

export default connect(null, mapDispatchtoProps)(CreateTruck);
