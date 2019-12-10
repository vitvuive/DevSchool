import { connect, } from 'react-redux';
import { selectors, actions, } from 'src/stores';
import ListCart from './ListCart';

const mapStateToProps = (state) => ({
  isLoading: selectors.cart.getLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGetData: () => dispatch(actions.cart.getCartData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCart);
