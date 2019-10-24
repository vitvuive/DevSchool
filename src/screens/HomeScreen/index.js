import { connect, } from 'react-redux';

import { selectors, } from '../../stores';
import HomeScreen from './HomeScreen';

const mapStateToProps = (state) => ({
  name: selectors.user.getUsername(state),
  email: selectors.user.getEmail(state),
  urlAvatar: selectors.user.getUrlAvatar(state),
});

export default connect(mapStateToProps)(HomeScreen);
