import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import CardOrderItem from './CardOrderItem';
import ScreenIDs from 'src/screens/ScreenIDs';

const mapDispatchToProps = (dispatch, { componentId, data, }) => {
  const onPush = async () => {
    await Navigation.push(componentId, {
      component: {
        name: ScreenIDs.QRCodeScreen,
        passProps: { data, },
      },
    });
  };
  return { onPush, };
};

export default connect(undefined, mapDispatchToProps)(CardOrderItem);
