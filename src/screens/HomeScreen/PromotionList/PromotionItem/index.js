import { connect, } from 'react-redux';
import { Navigation, } from 'react-native-navigation';

import ScreenIDs from 'src/screens/ScreenIDs';

import PromotionItem from './PromotionItem';

const mapDispatchToProps = (dispatch, { componentId, dataShop, }) => {
  const onRowPress = async () => {
    try {
      await Navigation.push(componentId, {
        component: {
          name: ScreenIDs.MarkerDetailScreen,
          passProps: { dataShop, },
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
