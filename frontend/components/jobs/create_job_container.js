import { connect } from 'react-redux';
import addJob from '../../actions/job_actions';
import CreateJob from './create_job';

const mapDispatchtoProps = dispatch => ({
  addJob: job => dispatch(addJob(job)),
});

export default connect(null, mapDispatchtoProps)(CreateJob);
