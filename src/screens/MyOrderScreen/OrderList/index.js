import { connect, } from 'react-redux';
import { actions, selectors, } from 'src/stores';
import OrderList from './OrderList';

const mapStateToProps = (state) => ({
  dataTransaction: selectors.cart.getTransaction(state),
  isLoading: selectors.cart.getLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGetTransaction: () => dispatch(actions.cart.getTransactionData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
