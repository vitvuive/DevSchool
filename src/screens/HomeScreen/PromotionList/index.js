import { connect, } from 'react-redux';

import { dataFake, } from 'src/values';
import PromotionList from './PromotionList';

const mapStateToProps = () => ({ dataFake, });
export default connect(mapStateToProps)(PromotionList);
