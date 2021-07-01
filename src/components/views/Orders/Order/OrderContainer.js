import {connect} from 'react-redux';
import Order from './Order';
import {getAll, getLoadingState, fetchFromAPI} from '../../../../redux/tablesRedux';
import { getLoadingOrdersState, getOrders, fetchOrderFromApi} from '../../../../redux/orderRedux';
import { watiterOrderUrl } from '../../../../App';





const mapStateToProps = (state, props) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
  orders: getOrders(state),
  ordersLoading: getLoadingOrdersState,
  orderId: parseInt(props.location.pathname.slice(watiterOrderUrl.length+6)),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  fetchOrder: () => dispatch(fetchOrderFromApi()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);