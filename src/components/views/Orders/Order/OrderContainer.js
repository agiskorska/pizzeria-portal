import {connect} from 'react-redux';
import Order from './Order';
import {createActionUpdateStatus} from '../../../../redux/orderRedux';



const mapStateToProps = (state, props) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  updateStatus: (id, status) => dispatch(createActionUpdateStatus(
    {
      id: id,
      status: status,
    }
  )),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);