import { connect, } from 'react-redux';

import { selectors, actions, } from 'src/stores';
import HomeScreen from './HomeScreen';

const mapStateToProps = (state) => ({
  isLoading: selectors.map.getPosLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => {
  const callback = () => {
    dispatch(actions.map.setPositionUser());
    dispatch(actions.map.getShopByLocation());
    dispatch(actions.transaction.createTransaction());
  };
  return { callback, };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
