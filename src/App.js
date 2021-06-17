import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import AllBookingsContainer from './components/views/Bookings/AllBookings/AllBookingsContainer';
import Booking from './components/views/Bookings/Booking/Booking';
import AllOrders from './components/views/Orders/AllOrders/AllOrders';
import OrderContainer from './components/views/Orders/Order/OrderContainer';

export default class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <BrowserRouter > 
          <MainLayout bookingId={1}>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/bookings'} component={AllBookingsContainer} />
              <Route exact path={process.env.PUBLIC_URL + '/bookings/:id'} component={Booking} />
              <Route exact path={process.env.PUBLIC_URL + '/orders'} component={AllOrders} />
              <Route exact path={process.env.PUBLIC_URL + '/orders/:id'} component={OrderContainer} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </div>
    );
  }
}
