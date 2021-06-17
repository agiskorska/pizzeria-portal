import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const PageNav = (props) => {
  return (
    <nav>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/bookings`} activeClassName='active'>Bookings</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/orders`} activeClassName='active'>Orders</NavLink>
    </nav>
  );
};

PageNav.propTypes = {

};

export default PageNav;
