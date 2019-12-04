import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import { selectors, } from 'src/stores';
import { Fonts, } from 'src/theme';

import ScreenIDs from '../ScreenIDs';
import StoreMenuScreen from './StoreMenuScreen';

const categoryByShopId = [
  {
    id: 1,
    name: 'Coffee',
  },
  {
    id: 2,
    name: 'Tea',
  },
  {
    id: 3,
    name: 'Yakult',
  },
];

const mapStateToProps = (state) => {
  const dataCart = selectors.cart.getCartData(state);
  //get number item of cart
  const numberItem = Array.isArray(dataCart) ? dataCart.length : 0;
  // get total price
  const sumPriceItem = Array.isArray(dataCart)
    ? dataCart.map((item) => item.price).reduce((prev, curr) => prev + curr, 0)
    : 0;
  return { numberItem, sumPriceItem, categoryByShopId, };
};

const mapDispatchToProps = (dispatch, { componentId, }) => {
  const onPush = async () => {
    try {
      Navigation.push(componentId, {
        component: {
          name: ScreenIDs.CartScreen,

          options: {
            topBar: {
              title: {
                text: 'Cart Food',
                alignment: 'center',
                fontFamily: Fonts.Default.medium,
                fontSize: 15,
              },
            },
            bottomTabs: {
              visible: false,
              drawBehind: true,
              animate: true,
            },
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
