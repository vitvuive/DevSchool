import { connect, } from 'react-redux';

import { ValueApi, } from 'src/values';
import PromotionList from './PromotionList';

const mapStateToProps = () => ({
  dataFake: ValueApi.dataFake,
  DATA_LOCALHOST: ValueApi.DATA_LOCALHOST,
});
export default connect(mapStateToProps)(PromotionList);
