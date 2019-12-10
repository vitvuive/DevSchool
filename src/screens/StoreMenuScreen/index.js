import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import { selectors, } from 'src/stores';
import { NavigationStyles, } from 'src/custom-navigation';

import ScreenIDs from '../ScreenIDs';
import StoreMenuScreen from './StoreMenuScreen';

StoreMenuScreen.navigationStyle = {
  ...NavigationStyles.StatusLightBehind,
};

const mapStateToProps = (state) => {
  const isLoading = selectors.menu.getLoadingStatus(state);

  //get list category for tabview
  const categoryByShopId = selectors.menu.getListCategory(state);

  const dataTransaction = selectors.cart.getTransaction(state);
  const dataCart = dataTransaction.item;
  //get number item of cart

  const numberItem = Array.isArray(dataCart) ? dataCart.length : 0;
  // get total price
  const sumPriceItem = Array.isArray(dataCart)
    ? dataCart.map((item) => item.price).reduce((prev, curr) => prev + curr, 0)
    : 0;

  return { isLoading, numberItem, sumPriceItem, categoryByShopId, };
};

const mapDispatchToProps = (dispatch, { componentId, dataShop, }) => {
  const onPush = async () => {
    try {
      Navigation.push(componentId, {
        component: {
          name: ScreenIDs.CartScreen,
          passProps: {
            coordinate: dataShop.coordinate,
            name: dataShop.merchant.name,
          },
        },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return { onPush, };
};
export default connect(mapStateToProps, mapDispatchToProps)(StoreMenuScreen);
