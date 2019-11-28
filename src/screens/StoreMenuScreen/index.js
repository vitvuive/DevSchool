import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import { selectors, } from 'src/stores';
import { Fonts, } from 'src/theme';

import ScreenIDs from '../ScreenIDs';
import StoreMenuScreen from './StoreMenuScreen';

const mapStateToProps = (state) => {
  const dataCart = selectors.cart.getCartData(state);
  //get number item of cart
  const numberItem = dataCart.length;
  // get total price
  const sumPriceItem = dataCart
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);
  return { numberItem, sumPriceItem, };
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
