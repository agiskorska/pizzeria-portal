// selectors
export const getBooking = ({booking}) => booking;


// action name creator
const reducerName = 'booking';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_BOOKING = createActionName('ADD_BOOKING');

// action creators
export const addNewBooking = payload => ({ payload, type: ADD_BOOKING });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_BOOKING:
      return Object.assign({}, statePart, {
        todos: statePart.concat({
          "id" : 2,
          "date" : "2021-08-03",
          "hour" : "14:00",
          "table" : 2,
          "duration" : 3,
          "ppl" : 2,
          "starters" : ["water"],
        }),
      });
    default:
      return statePart;
  }
}
