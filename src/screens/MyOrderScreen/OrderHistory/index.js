import { connect, } from 'react-redux';
import { selectors, } from 'src/stores';

import OrderHistory from './OrderHistory';

const mapStateToProps = (state) => ({
  dataHistory: selectors.transaction.getHistoryData(state),
});

export default connect(mapStateToProps)(OrderHistory);
