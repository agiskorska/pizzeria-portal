import React from 'react';
import PropTypes from 'prop-types';
import styles from './AllBookings.module.scss';

import Booking from '../Booking/Booking';

class AllBookings extends React.Component {
  render() {
    const {booking} = this.props;
    console.log(booking);
    return (
      <div className={styles.component}>
        <h2>All Bookings</h2>
        <div>
          <Booking booking={booking} />
        </div>
      </div>
    );
  }
}

AllBookings.propTypes = {
  booking: PropTypes.any, 
};

export default AllBookings;
