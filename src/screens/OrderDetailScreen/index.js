import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import { actions, } from 'src/stores';
import { NavigationStyles, } from 'src/custom-navigation';
import OrderDetailScreen from './OrderDetailScreen';

OrderDetailScreen.title = 'Detail';
OrderDetailScreen.navigationStyle = {
  ...NavigationStyles.HideBottomTabStyle,
  ...NavigationStyles.HideBottomTabAndNormalTopBar,
};

const mapDispatchToProps = (dispatch, { shopId, id, componentId, }) => {
  const onAddCart = async () => {
    dispatch(actions.cart.addItemToCart({ id, shopId, }));
    await Navigation.pop(componentId);
  };
  return {
    onAddCart,
  };
};
export default connect(null, mapDispatchToProps)(OrderDetailScreen);
