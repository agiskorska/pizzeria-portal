import React from 'react';
import PropTypes from 'prop-types';

export default class Order extends React.Component {

  render() {
    
    const {orders, updateStatus, statusArr} = this.props;
    return (
      <div>
        
        { orders ? 
          orders.map((order) => {
            if (order.status === 2) {
              return (
                <div key={order.id}>
                  <h3>{order.id}</h3>
                  <div>Order Completed!</div>
                </div>
              );
            }
            if(!order.status) {
              order.status = 0;
            }  
            return order ?
              <div key={order.id}>
                <h3>{order.id}</h3>
                <div>{statusArr[order.status]}</div>
                <button onClick={() => updateStatus(order.id, order.status)}>{statusArr[order.status < 2 ? order.status+1 : order.status]}</button>
              </div>  
              : '';
          }) 
          : 
          <h3>No current orders</h3>
        }
      </div>
    );
  }
}

Order.propTypes = {
  orders: PropTypes.any, 
  updateStatus: PropTypes.func,
  statusArr: PropTypes.array,
};

//ToDo: kiedy kliknie sie 'completed' usun ten order.