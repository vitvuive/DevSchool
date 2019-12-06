import React, { Component, } from 'react';
import { View, Image, StyleSheet, ScrollView, } from 'react-native';
import PropTypes from 'prop-types';

import {
  StyledButton,
  StyleText,
  StyledButtonSmall,
} from 'src/shared-components';
import { IconAssets, } from 'src/assets';
import { Colors, Metrics, } from 'src/theme';
export default class MarkerDetailScreen extends Component {
  static propTypes = {
    onDirection: PropTypes.func.isRequired,
    onPushToMenu: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onGetCategoryList, } = this.props;
    onGetCategoryList && onGetCategoryList();
  }

  render() {
    const { dataShop, onPushToMenu, } = this.props;
    const { address, merchant, } = dataShop;
    const { name, promotion_img_path, promotion_detail, } = merchant;

    return (
      <View style={styles.container}>
        <Image source={{ uri: promotion_img_path, }} style={styles.imageStyle} />

        <View style={styles.infoMerchant}>
          <StyleText medium size={19} color={Colors.dark}>
            {name}
          </StyleText>
          <View style={styles.actionView}>
            <View style={styles.viewAddress}>
              <StyleText medium size={12}>
                {address}
              </StyleText>
            </View>
            <StyledButtonSmall
              title={'Direction'}
              textColor={Colors.background}
              backgroundColor={Colors.primary}
              icon={IconAssets.Direction}
              // onPress={() => onDirection(latitude, longitude, name)}
              onPress={() => alert('Open map direction')}
            />
          </View>
          <ScrollView>
            <StyleText size={15} style={styles.borderText}>
              {promotion_detail}
            </StyleText>
          </ScrollView>
        </View>
        <StyledButton
          title={'Go to Menu'}
          textColor={Colors.background}
          backgroundColor={Colors.primary}
          icon={IconAssets.Add_order}
          onPress={() => onPushToMenu(name)}
          containerStyle={styles.positionBtn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageStyle: {
    height: 170,
    width: '100%',
  },
  infoMerchant: {
    flex: 1,
    paddingTop: Metrics.getBaseUnitFactor(),
    paddingHorizontal: Metrics.getBaseUnitFactor(2),
  },
  actionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  viewAddress: {
    width: '60%',
  },
  borderText: {
    borderTopColor: Colors.border,
    borderTopWidth: 0.5,
    marginTop: Metrics.getBaseUnitFactor(),
    paddingTop: Metrics.getBaseUnitFactor(),
  },
  positionBtn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
