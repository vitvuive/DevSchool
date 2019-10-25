import { connect, } from 'react-redux';

import { selectors, actions, } from '../../stores';
import HomeScreen from './HomeScreen';

const mapStateToProps = (state) => ({
  name: selectors.user.getUsername(state),
  email: selectors.user.getEmail(state),
  urlAvatar: selectors.user.getUrlAvatar(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPress: () => dispatch(actions.user.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
