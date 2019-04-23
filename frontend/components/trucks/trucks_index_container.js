import { connect } from 'react-redux';
import { fetchTrucks } from '../../actions/truck_actions';
import TrucksIndex from './trucks_index';

const mapStatetoProps = state => ({
  trucks: state.trucks,
});

const mapDispatchtoProps = dispatch => ({
  fetchTrucks: () => dispatch(fetchTrucks()),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(TrucksIndex);
