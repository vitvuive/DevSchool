import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import ScreenIDs from 'src/screens/ScreenIDs';
import Fonts from 'src/theme/Fonts';

import PromotionItem from './PromotionItem';

const mapDispatchToProps = () => {
  const onRowPress = async (componentId) => {
    try {
      await Navigation.push(componentId, {
        component: {
          name: ScreenIDs.StoreMenuScreen,
          options: {
            topBar: {
              title: {
                text: 'Menu',
                alignment: 'center',
                fontFamily: Fonts.Default.medium,
              },
            },
          },
        },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };
  return {
    onRowPress,
  };
};
export default connect(mapDispatchToProps)(PromotionItem);
