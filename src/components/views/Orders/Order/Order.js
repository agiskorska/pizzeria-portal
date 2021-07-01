import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './Order.module.scss';



export default class Order extends React.Component {


  componentDidMount() {
    const { fetchTables, fetchOrder } = this.props;
    fetchTables();
    fetchOrder();
  }

  searchForOrder(key, arr) {
    for (var i=0; i < arr.length; i++) {
      if (arr[i].id === key) {
        return arr[i];
      }
    }
  }


  render() {
    const {orders, orderId, tables} = this.props;
    const order = this.searchForOrder(orderId, orders);
    console.log(order, orderId);
    return (
      <div>
        { order ?
          order.products.map(product => 
            <Card key={product.id} className={styles.root}>
              <CardContent>
                <Typography  className={styles.title} color="textSecondary" gutterBottom>
                  {product.id}
                </Typography>
                <Typography variant="h5" component="h2">
                  amount: {product.amount}
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          ) : 'Nothing to display'
        }
      </div>
    );
  }
}

Order.propTypes = {
  orders: PropTypes.any, 
  tables: PropTypes.any, 
  orderId: PropTypes.any,
  fetchOrder: PropTypes.func,
  fetchTables: PropTypes.func,
};

