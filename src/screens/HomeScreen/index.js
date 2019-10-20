import { connect, } from 'react-redux';

import HomeScreen from './HomeScreen';

const mapStateToProps = () => ({
  viet: 'dep trai',
});

export default connect(mapStateToProps)(HomeScreen);
