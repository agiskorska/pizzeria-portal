import Axios from 'axios';
import { api } from '../settings';


/* selectors */

export const getOrders = ({orders}) => orders.data;
export const getLoadingOrdersState = ({orders}) => orders.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ORDER_START = createActionName('FETCH_ORDER_START');
const FETCH_ORDER_SUCCESS = createActionName('FETCH_ORDER_SUCCESS');
const FETCH_ORDER_ERROR = createActionName('FETCH_ORDER_ERROR');

/* action creators */
export const fetchOrderStarted = payload => ({ payload, type: FETCH_ORDER_START });
export const fetchOrderSuccess = payload => ({ payload, type: FETCH_ORDER_SUCCESS });
export const fetchOrderError = payload => ({ payload, type: FETCH_ORDER_ERROR });

/* thunk creators */
export const fetchOrderFromApi = () => {
  return (dispatch) => {
    dispatch(fetchOrderStarted());

    Axios
      .get(`${api.url}/api/${api.order}`)
      .then(res => {
        dispatch(fetchOrderSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchOrderError(err.message || true));
      });
  };
};


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_ORDER_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_ORDER_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ORDER_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}