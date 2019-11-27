import { connect, } from 'react-redux';
import { selectors, } from 'src/stores';
import ListCart from './ListCart';

const mapStateToProps = (state) => ({
  dataCart: selectors.cart.getCartData(state),
});
export default connect(mapStateToProps)(ListCart);
