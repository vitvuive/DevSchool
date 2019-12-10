import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import { actions, } from 'src/stores';
import CoverStore from './CoverStore';

const mapDispatchToProps = (dispatch, { componentId, }) => {
  const onBackButton = async () => {
    await Navigation.pop(componentId);
    dispatch(actions.cart.setCartData());
  };
  return { onBackButton, };
};
export default connect(undefined, mapDispatchToProps)(CoverStore);
