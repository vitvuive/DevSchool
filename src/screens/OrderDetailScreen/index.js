import { connect, } from 'react-redux';

import { actions, } from 'src/stores';
import OrderDetailScreen from './OrderDetailScreen';

const mapDispatchToProps = (dispatch, { id, }) => {
  const onAddCart = () => {
    dispatch(actions.cart.addItemToCard({ id, }));
  };
  return {
    onAddCart,
  };
};
export default connect(null, mapDispatchToProps)(OrderDetailScreen);
