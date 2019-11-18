import { connect, } from 'react-redux';

import { selectors, } from 'src/stores';

import BannerHome from './BannerHome';

const mapStateToProps = (state) => ({
  name: selectors.user.getUsername(state),
});

export default connect(mapStateToProps)(BannerHome);
