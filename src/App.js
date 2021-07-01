import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import AllBookingsContainer from './components/views/Bookings/AllBookings/AllBookingsContainer';
import Booking from './components/views/Bookings/Booking/Booking';
import OrderContainer from './components/views/Orders/Order/OrderContainer';
import WaiterContainer from './components/views/Waiter/WaiterContainer';
import Kitchen from './components/views/Kitchen/Kitchen';
import { StylesProvider } from '@material-ui/core/styles';


export const watiterOrderUrl = '/waiter/order/';

export default class App extends React.Component {
  
  
  render() {
    return (
      <div className="App">
        <BrowserRouter > 
          <StylesProvider injectFirst>
            <MainLayout bookingId={1}>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/bookings'} component={AllBookingsContainer} />
                <Route exact path={process.env.PUBLIC_URL + '/bookings/:id'} component={Booking} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + `${watiterOrderUrl}:id`} component={OrderContainer} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={WaiterContainer} />
              </Switch>
            </MainLayout>
          </StylesProvider>
        </BrowserRouter>
      </div>
    );
  }
}
