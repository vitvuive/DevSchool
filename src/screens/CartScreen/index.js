import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import { actions, } from 'src/stores';
import CartScreen from './CartScreen';

const mapDispatchToProps = (dispatch, { componentId, }) => {
  const onCheckout = () => {
    dispatch(actions.cart.checkOut());
    Navigation.pop(componentId);
  };

  return { onCheckout, };
};

export default connect(undefined, mapDispatchToProps)(CartScreen);
