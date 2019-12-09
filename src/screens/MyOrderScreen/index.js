import { connect, } from 'react-redux';
import { actions, } from 'src/stores';
import MyOrderScreen from './MyOrderScreen';

const mapDispatchToProps = (dispatch) => {
  const onGetTransaction = () =>
    dispatch(actions.transaction.getTransactionData());
  return { onGetTransaction, };
};

export default connect(undefined, mapDispatchToProps)(MyOrderScreen);
