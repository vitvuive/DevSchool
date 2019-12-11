import { connect, } from 'react-redux';
import { selectors, } from 'src/stores';
import OrderActive from './OrderActive';

const mapStateToProps = (state) => ({
  dataTransaction: selectors.cart.getTransaction(state),
  isLoading: selectors.cart.getLoadingStatus(state),
});
export default connect(mapStateToProps)(OrderActive);
