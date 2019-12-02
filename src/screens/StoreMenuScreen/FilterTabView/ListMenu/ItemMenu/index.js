import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import ItemMenu from './ItemMenu';
import Fonts from 'src/theme/Fonts';

import ScreenIDs from 'src/screens/ScreenIDs';

const mapDispatchToProps = (
  dispatch,
  { componentId, name, price, img_url, id, }
) => {
  const onPressItem = async () => {
    try {
      await Navigation.push(componentId, {
        component: {
          name: ScreenIDs.OrderDetailScreen,
          passProps: {
            name,
            price,
            img_url,
            id,
          },
          options: {
            topBar: {
              title: {
                text: 'Detail drink',
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
