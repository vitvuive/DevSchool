import { connect, } from 'react-redux';
import { actions, } from 'src/stores';
import ItemCart from './ItemCart';

const mapDispatchToProps = (dispatch, { data, }) => ({
  onRemoveItem: () => dispatch(actions.cart.removeItemFromCart(data.id)),
});

export default connect(undefined, mapDispatchToProps)(ItemCart);
