import { connect, } from 'react-redux';

import { selectors, } from 'src/stores';
import HomeScreen from './HomeScreen';

const mapStateToProps = (state) => ({
  isLoading: selectors.map.getPosLoadingStatus(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
