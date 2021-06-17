
// selectors
export const getCurrentStatus = ({orders}) => orders.status === 'pending' ? 'in making' : 'completed';

// action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const UPDATE_STATUS = createActionName('UPDATE_STATUS');
export const ADD_STATUS = createActionName('ADD_STATUS');

// action creators
export const createActionUpdateStatus = payload => ({ payload: { ...payload, status: payload.status }, type: UPDATE_STATUS});
export const createActionAddStatus = payload => ({ payload: { ...payload, status: getCurrentStatus }, type: ADD_STATUS});

// reducer 

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_STATUS:
      return (
        statePart.map(order => {
          if(order.id === action.payload.id) {
            return {...order, status: action.payload.status+1};
          } 
          else 
          {
            return order;
          } 
        })
      );
    default:
      return statePart;
  }
}