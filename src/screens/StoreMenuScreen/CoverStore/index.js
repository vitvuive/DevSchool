import { Navigation, } from 'react-native-navigation';
import { connect, } from 'react-redux';

import {} from 'src/stores';
import CoverStore from './CoverStore';

const mapDispatchToProps = (dispatch, { componentId, }) => {
  const onBackButton = async () => {
    await Navigation.pop(componentId);
  };
  return { onBackButton, };
};
export default connect(undefined, mapDispatchToProps)(CoverStore);
