import React, { Component, } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, } from 'react-native';

import { StyleText, } from 'src/shared-components';
import { Colors, Metrics, } from 'src/theme';
import { IconAssets, } from 'src/assets';

export default class ItemCart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://gongcha.com.vn/wp-content/uploads/2019/04/TS-Dong-Phuong-My-Nhan-tc-1.png',
          }}
          style={styles.image}
        />
        <View style={styles.info}>
          <StyleText medium>{'Trà Phổ Nhĩ Mật Ong Latte'}</StyleText>
          <StyleText medium primary>
            {'45000 đ'}
          </StyleText>
        </View>
        <TouchableOpacity>
          <Image source={IconAssets.Trash} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    borderRadius: 5,

    elevation: 2,
    shadowRadius: 5,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: Colors.primary,

    marginTop: Metrics.getBaseUnitFactor(2),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  image: {
    height: 100,
    width: 100,
  },
  info: {
    width: '55%',
    justifyContent: 'center',
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: Metrics.getBaseUnitFactor(),
    tintColor: Colors.inActiveBtmTabColor,
  },
});
