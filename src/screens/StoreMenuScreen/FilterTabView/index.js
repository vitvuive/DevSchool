import { connect, } from 'react-redux';
import { selectors, } from 'src/stores';
import FilterTabView from './FilterTabView';

const mapStateToProps = (state) => ({
  isLoading: selectors.menu.getLoadingStatus(state),
});

export default connect(mapStateToProps)(FilterTabView);
