import { connect, } from 'react-redux';
import { selectors, } from '../../stores';
import LoginScreen from './LoginScreen';

const mapStateToProps = () => ({
  isLoading: selectors.user.getAuthLoadingStatus,
});
export default connect(mapStateToProps)(LoginScreen);
