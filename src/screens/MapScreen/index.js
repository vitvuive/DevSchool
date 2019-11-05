import { connect, } from 'react-redux';

import { selectors, actions, } from 'src/stores';

import MapScreen from './MapScreen';

const mapStateToProps = () => ({
  currenPosition: selectors.global.getPosition(),
});

const mapDispatchToProps = (dispatch) => ({
  getLocation: () => dispatch(actions.global.setPositionUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen);
