import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';
import {Link} from 'react-router-dom';


class Booking extends React.Component{
  render() {
    const {booking} = this.props;
    return (
      <div className={styles.component}>
        <h2>Booking</h2>
        {
          booking.map((booking) => {
            return booking.id ? 
              <Link key={booking.id} to={`/bookings/${booking.id}`} className={styles.link}>
                Booking #{booking.id} booked for : {booking.date}<br/>
                
              </Link> : <div>Nothing to show</div>;
          })
        }
        <Link to={`/bookings/new`} className={styles.link}>New Booking</Link>
      </div>
    );
  }
}

Booking.propTypes = {
  booking: PropTypes.any,
};

export default Booking;


/* 
TODO: Zrobic redux store.js, pobierac dane ze store.js


*/