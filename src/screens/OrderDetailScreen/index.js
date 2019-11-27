import { connect, } from 'react-redux';

import { actions, } from 'src/stores';
import OrderDetailScreen from './OrderDetailScreen';

const mapDispatchToProps = (dispatch) => {
  const onAddCart = () => {
    dispatch(actions.cart.getCartData());
  };
  return {
    onAddCart,
  };
};
export default connect(null, mapDispatchToProps)(OrderDetailScreen);
