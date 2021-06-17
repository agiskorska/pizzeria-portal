import {connect} from 'react-redux';
import AllBookings from './AllBookings';



const mapStateToProps = (state, props) => {
  console.log(state, props);
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(AllBookings);