import React, { Component, } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';
import { IconAssets, } from 'src/assets';
export default class CoverStore extends Component {
  render() {
    const { onBackButton, title, uriCover, } = this.props;
    return (
      <ImageBackground style={styles.container} source={{ uri: uriCover, }}>
        <View style={styles.viewTitle}>
          <TouchableOpacity onPress={onBackButton}>
            <Image source={IconAssets.Back} style={styles.iconBackStyle} />
          </TouchableOpacity>
          <StyleText medium size={20} color={'#fff'}>
            {title}
          </StyleText>
          <View />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: '#fff',
  },
  viewTitle: {
    flex: 1,
    paddingHorizontal: Metrics.getBaseUnitFactor(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  iconBackStyle: {
    height: 24,
    width: 24,
    tintColor: '#fff',
  },
});
