import { connect, } from 'react-redux';

import { selectors, actions, } from 'src/stores';
import PromotionList from './PromotionList';

const mapStateToProps = (state) => ({
  dataFake: selectors.map.getListShopNearTo(state),
  isLoading: selectors.map.getPosLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRefresh: () => dispatch(actions.map.getShopByLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromotionList);
