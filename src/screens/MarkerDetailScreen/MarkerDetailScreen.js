import React, { Component, } from 'react';
import { View, Image, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';

import { StyledButton, StyleText, } from 'src/shared-components';
import { IconAssets, } from 'src/assets';
import { Colors, Metrics, } from 'src/theme';
export default class MarkerDetailScreen extends Component {
  static propTypes = {
    menu: PropTypes.object,
    name: PropTypes.string,
    address: PropTypes.string,
    banner: PropTypes.func,

    onDirection: PropTypes.func.isRequired,
    onPush: PropTypes.func.isRequired,
  };
  render() {
    const { reponse, onDirection, onPush, } = this.props;
    const { merchant, banner, latitude, longitude, } = reponse;
    const { name, } = merchant;

    return (
      <View style={styles.container}>
        <Image source={banner} style={styles.imageStyle} />
        <View style={styles.actionView}>
          <StyledButton
            title={'Add food'}
            textColor={'#fff'}
            icon={IconAssets.Add_order}
            onPress={() => onPush(name)}
          />
          <StyledButton
            title={'Direction'}
            textColor={'#fff'}
            icon={IconAssets.Direction}
            onPress={() => onDirection(latitude, longitude, name)}
          />
        </View>
        <View style={styles.infoMerchant}>
          <StyleText medium size={18} light>
            {reponse.merchant.name}
          </StyleText>
          <StyleText>{reponse.address}</StyleText>
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
