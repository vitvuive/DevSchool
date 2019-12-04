import React, { Component, } from 'react';
import { TouchableOpacity, View, Image, StyleSheet, } from 'react-native';

import { IconAssets, } from 'src/assets';
import { Metrics, Colors, } from 'src/theme';
import { StyleText, } from 'src/shared-components';

export default class PromotionItem extends Component {
  render() {
    const { onRowPress, dataShop, } = this.props;
    return (
      <TouchableOpacity onPress={onRowPress}>
        <View style={styles.container}>
          <Image
            source={{ uri: dataShop.merchant.promotion_img_path, }}
            style={styles.imageStyle}
          />
          <View style={{ paddingHorizontal: Metrics.getBaseUnitFactor(3), }}>
            <View style={styles.viewContent}>
              <StyleText size={13} numberOfLines={2}>
                {dataShop.merchant.promotion_detail}
              </StyleText>
            </View>
            <View style={styles.viewAction}>
              <Image source={IconAssets.Like} style={styles.iconStyle} />
              <Image source={IconAssets.Bookmark} style={styles.iconStyle} />
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
    elevation: 3,
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
    borderTopColor: Colors.border,
    borderBottomWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: Metrics.getBaseUnitFactor(),

    backgroundColor: '#fff',
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
