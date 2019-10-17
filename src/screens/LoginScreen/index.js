import { connect, } from 'react-redux';
import { selectors, actions, } from '../../stores';
import LoginScreen from './LoginScreen';

const mapStateToProps = (state) => ({
  isLoading: selectors.user.getAuthLoadingStatus(state),
});
const mapDispatchToProps = (dispatch) => ({
  onPress: () => dispatch(actions.user.loginWithFb()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
