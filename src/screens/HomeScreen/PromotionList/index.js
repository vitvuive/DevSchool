import { connect, } from 'react-redux';

import { selectors, } from 'src/stores';
import PromotionList from './PromotionList';

const mapStateToProps = (state) => ({
  dataFake: selectors.map.getListShopNearTo(state),
});
export default connect(mapStateToProps)(PromotionList);
