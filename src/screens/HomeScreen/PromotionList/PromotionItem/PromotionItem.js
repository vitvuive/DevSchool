import React, { Component, } from 'react';
import { TouchableOpacity, View, Image, StyleSheet, } from 'react-native';

import { IconAssets, } from 'src/assets';
import { Metrics, Colors, } from 'src/theme';
import { StyleText, } from 'src/shared-components';

export default class PromotionItem extends Component {
  render() {
    const { onRowPress, banner, } = this.props;
    return (
      <TouchableOpacity onPress={onRowPress}>
        <View style={styles.container}>
          <Image source={banner} style={styles.imageStyle} />
          <View style={{ paddingHorizontal: Metrics.getBaseUnitFactor(3), }}>
            <View style={styles.viewContent}>
              <StyleText size={17}>
                {'10 giải đặc biệt, Du lịch Phú Quốc '}
              </StyleText>
              <StyleText>
                {'Đến Highland Coffee ngay! để có cơ hội trúng thưởng '}
              </StyleText>
            </View>
            <View style={styles.viewAction}>
              <Image source={IconAssets.Like} style={styles.iconStyle} />
              <Image source={IconAssets.Heart} style={styles.iconStyle} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Metrics.getBaseUnitFactor(),
    borderRadius: 10,
    shadowOffset: { height: 3, width: 13, },
    elevation: 8,
    shadowColor: 'black',
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  viewContent: {
    backgroundColor: '#fff',
    borderTopColor: Colors.inActiveBtmTabColor,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAction: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    height: 25,
    width: 25,
  },
});
