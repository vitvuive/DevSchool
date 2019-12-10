import { connect, } from 'react-redux';

import { selectors, actions, } from 'src/stores';
import PromotionList from './PromotionList';

const mapStateToProps = (state) => ({
  isLoading: selectors.map.getPosLoadingStatus(state),
  dataFake: selectors.map.getListShopNearTo(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRefresh: () => dispatch(actions.map.getShopByLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromotionList);
