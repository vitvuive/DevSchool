import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import ItemMenu from './ItemMenu';
import Fonts from 'src/theme/Fonts';

import ScreenIDs from 'src/screens/ScreenIDs';

const mapStateToProps = () => {
  const onPressItem = async (componentId) => {
    try {
      await Navigation.push(componentId, {
        component: {
          name: ScreenIDs.OrderDetailScreen,
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

export default connect(mapStateToProps)(ItemMenu);