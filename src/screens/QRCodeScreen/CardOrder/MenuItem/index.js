import { connect, } from 'react-redux';
import MenuItem from './MenuItem';

const mapStateToProps = (state, { dataTransaction, }) => {
  const dataCart = dataTransaction.item;
  const totalPrice = Array.isArray(dataCart)
    ? dataCart.map((item) => item.price).reduce((prev, curr) => prev + curr, 0)
    : 0;
  return { totalPrice, };
};
export default connect(mapStateToProps)(MenuItem);
