import React, { Component, } from 'react';
import { View, Image, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';

import { StyledButton, StyleText, } from 'src/shared-components';
import { IconAssets, } from 'src/assets';
import { Colors, Metrics, } from 'src/theme';
export default class MarkerDetailScreen extends Component {
  static propTypes = {
    onDirection: PropTypes.func.isRequired,
    onPushToMenu: PropTypes.func.isRequired,
  };
  render() {
    const { dataShop, onPushToMenu, } = this.props;
    const { address, merchant, } = dataShop;
    const { name, promotion_img_path, promotion_detail, } = merchant;

    return (
      <View style={styles.container}>
        <Image source={{ uri: promotion_img_path, }} style={styles.imageStyle} />
        <View style={styles.actionView}>
          <StyledButton
            title={'Add food'}
            textColor={'#fff'}
            icon={IconAssets.Add_order}
            onPress={() => onPushToMenu(name)}
          />
          <StyledButton
            title={'Direction'}
            textColor={'#fff'}
            icon={IconAssets.Direction}
            // onPress={() => onDirection(latitude, longitude, name)}
            onPress={() => alert('Open map direction')} // TODO: Format again lat long
          />
        </View>
        <View style={styles.infoMerchant}>
          <StyleText medium size={18} light>
            {name}
          </StyleText>
          <StyleText>{address}</StyleText>
          <StyleText>{promotion_detail}</StyleText>
        </View>
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
    height: 150,
    width: '100%',
  },
  actionView: {
    marginTop: Metrics.getBaseUnitFactor(2),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoMerchant: {
    paddingHorizontal: Metrics.getBaseUnitFactor(2),
  },
});
