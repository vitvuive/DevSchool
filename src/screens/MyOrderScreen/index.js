import { connect, } from 'react-redux';
import { actions, selectors, } from 'src/stores';
import MyOrderScreen from './MyOrderScreen';

const mapStateToProps = (state) => ({
  dataTransaction: selectors.transaction.getDataTransaction(state),
});
const mapDispatchToProps = (dispatch) => {
  const onGetTransaction = () =>
    dispatch(actions.transaction.getTransactionData());
  return { onGetTransaction, };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrderScreen);
