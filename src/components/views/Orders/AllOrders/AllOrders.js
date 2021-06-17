import React from 'react';
import styles from './AllOrders.module.scss';

import OrderContainer from '../Order/OrderContainer';

class AllOrders extends React.Component {

  render() {
    return (
      <div className={styles.component}>
        <h2>All Orders</h2>
        <OrderContainer />
      </div>
    );
  }
}

export default AllOrders;