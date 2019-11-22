import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import ItemMenu from './ItemMenu';
import Fonts from 'src/theme/Fonts';

import ScreenIDs from 'src/screens/ScreenIDs';

const mapDispatchToProps = (dispatch, { componentId, name, price, url, }) => {
  const onPressItem = async () => {
    try {
      await Navigation.push(componentId, {
        component: {
          name: ScreenIDs.OrderDetailScreen,
          passProps: {
            name,
            price,
            url,
          },
          options: {
            topBar: {
              title: {
                text: 'Detail drink',
                alignment: 'center',
                fontFamily: Fonts.Default.medium,
              },
            },
          },
        },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return {
    onPressItem,
  };
};

export default connect(mapDispatchToProps)(ItemMenu);
