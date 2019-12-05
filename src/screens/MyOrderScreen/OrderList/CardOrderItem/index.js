import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';
import { Fonts, } from 'src/theme';

import CardOrderItem from './CardOrderItem';
import ScreenIDs from 'src/screens/ScreenIDs';

const mapDispatchToProps = (dispatch, { componentId, data, }) => {
  const onPush = async () => {
    await Navigation.push(componentId, {
      component: {
        name: ScreenIDs.QRCodeScreen,
        passProps: { data, },
        options: {
          topBar: {
            title: {
              text: 'Information Detail',
              alignment: 'center',
              fontFamily: Fonts.Default.medium,
            },
          },
          bottomTabs: {
            visible: false,
            drawBehind: true,
            animate: true,
          },
        },
      },
    });
  };
  return { onPush, };
};

export default connect(undefined, mapDispatchToProps)(CardOrderItem);
