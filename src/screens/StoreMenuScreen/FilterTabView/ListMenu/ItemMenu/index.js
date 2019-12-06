import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import ItemMenu from './ItemMenu';

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
