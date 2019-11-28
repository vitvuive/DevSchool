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
import { ImageAssets, IconAssets, } from 'src/assets';
export default class CoverStore extends Component {
  render() {
    const { onBackButton, } = this.props;
    return (
      <ImageBackground style={styles.container} source={ImageAssets.Card3}>
        <View style={styles.viewTitle}>
          <TouchableOpacity onPress={onBackButton}>
            <Image source={IconAssets.Back} style={styles.iconBackStyle} />
          </TouchableOpacity>
          <StyleText medium size={18} color={'#fff'}>
            {'HighLand Coffee'}
          </StyleText>
          <View />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
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
    height: 20,
    width: 20,
    tintColor: '#fff',
  },
});
