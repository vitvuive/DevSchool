import { connect, } from 'react-redux';
import { Alert, Linking, } from 'react-native';
import { NavigationStyles, } from 'src/custom-navigation';

import { startMainApp, } from 'src/AppController';
import { selectors, } from 'src/stores';
import CartScreen from './CartScreen';
import { Metrics, } from 'src/theme';

CartScreen.title = 'Cart';
CartScreen.navigationStyle = {
  ...NavigationStyles.HideBottomTabStyle,
  ...NavigationStyles.HideBottomTabAndNormalTopBar,
};

const onDirection = (coordinate, name) => {
  const latLng = `${coordinate[1]},${coordinate[0]}`;

  const url = Metrics.isAndroid
    ? `geo:0,0?q=${latLng}(${name})`
    : `maps:0,0?q=${latLng}(${name})`;
  Linking.openURL(url);
};

const mapStateToProps = (state) => {
  const isLoading = selectors.cart.getLoadingStatus(state);
  const dataCart = selectors.cart.getTransaction(state).item;

  const sumPriceItem = Array.isArray(dataCart)
    ? dataCart.map((item) => item.price).reduce((prev, curr) => prev + curr, 0)
    : 0;
  return { dataCart, sumPriceItem, isLoading, };
};

const mapDispatchToProps = (dispatch, { coordinate, name, }) => {
  const onCheckout = () => {
    // dispatch(actions.cart.checkOut());
    // Navigation.pop(componentId);
    Alert.alert('Order success!', 'Do you want directions to the store?', [
      {
        text: 'Back to Home',
        onPress: () => startMainApp(),
      },

      {
        text: 'Go to Direction',
        onPress: () => onDirection(coordinate, name),
      },
    ]);
  };

  return { onCheckout, };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
