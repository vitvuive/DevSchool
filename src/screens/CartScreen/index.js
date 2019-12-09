import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';
import { NavigationStyles, } from 'src/custom-navigation';

import { actions, selectors, } from 'src/stores';
import CartScreen from './CartScreen';
CartScreen.title = 'Cart';
CartScreen.navigationStyle = {
  ...NavigationStyles.HideBottomTabStyle,
  ...NavigationStyles.HideBottomTabAndNormalTopBar,
};

const mapStateToProps = (state) => {
  const dataCart = selectors.cart.getTransaction(state).item;

  const sumPriceItem = Array.isArray(dataCart)
    ? dataCart.map((item) => item.price).reduce((prev, curr) => prev + curr, 0)
    : 0;
  return { dataCart, sumPriceItem, };
};

const mapDispatchToProps = (dispatch, { componentId, }) => {
  const onCheckout = () => {
    dispatch(actions.cart.checkOut());
    Navigation.pop(componentId);
  };

  return { onCheckout, };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
