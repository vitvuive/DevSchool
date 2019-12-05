import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import { actions, } from 'src/stores';
import OrderDetailScreen from './OrderDetailScreen';

const mapDispatchToProps = (dispatch, { name, price, url, componentId, }) => {
  const onAddCart = async () => {
    dispatch(actions.cart.addItemToCart({ name, price, url, }));
    await Navigation.pop(componentId);
  };
  return {
    onAddCart,
  };
};
export default connect(null, mapDispatchToProps)(OrderDetailScreen);
