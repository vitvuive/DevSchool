import React, { Component, } from 'react';
import { View, StyleSheet, ImageBackground, } from 'react-native';
import { Colors, Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';
import { ImageAssets, } from 'src/assets';
export default class CoverStore extends Component {
  render() {
    return (
      <ImageBackground style={styles.conatainer} source={ImageAssets.Card3}>
        <View style={styles.viewTitle}>
          <StyleText size={25} color={'#fff'}>
            {'HighLand Coffee Hai Ba Trung'}
          </StyleText>
          <StyleText color={'#fff'} style={styles.border}>
            {
              'Ưu đãi coffee khi nhập mã VIETDEPTRAI, áp dụng khung  từ 8:00 đến 17:00'
            }
          </StyleText>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  conatainer: {
    height: 180,
    backgroundColor: '#fff',
  },
  viewTitle: {
    flex: 3,
    borderBottomWidth: 1,

    shadowOffset: { height: 3, width: 13, },

    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: Metrics.getBaseUnitFactor(4),
    borderBottomColor: Colors.inActiveBtmTabColor,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  border: {
    borderTopWidth: 1,
    paddingTop: Metrics.getBaseUnitFactor(),
    marginTop: Metrics.getBaseUnitFactor(),
    borderTopColor: '#fff',
  },
});
