import { connect, } from 'react-redux';
import { actions, selectors, } from 'src/stores';
import OrderActive from './OrderActive';

const mapStateToProps = (state) => ({
  dataTransaction: selectors.cart.getTransaction(state),
  isLoading: selectors.cart.getLoadingStatus(state),
});
const mapDispatchToProps = (dispatch) => {
  const onGetTransaction = () =>
    dispatch(actions.transaction.getTransactionData());
  return { onGetTransaction, };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderActive);
