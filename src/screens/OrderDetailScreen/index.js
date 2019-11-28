import { connect, } from 'react-redux';

import { actions, } from 'src/stores';
import OrderDetailScreen from './OrderDetailScreen';

const mapDispatchToProps = (dispatch, { name, price, url, }) => {
  const onAddCart = () => {
    dispatch(actions.cart.addItemToCart({ name, price, url, }));
  };
  return {
    onAddCart,
  };
};
export default connect(null, mapDispatchToProps)(OrderDetailScreen);
