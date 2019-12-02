import React, { Component, } from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import { Metrics, Colors, } from 'src/theme';
import { StyleText, } from 'src/shared-components';
import { Formatters, } from 'src/services';

const WIDTH_ITEM =
  (Dimensions.get('window').width - Metrics.getBaseUnitFactor(6)) / 2;
export default class ItemMenu extends Component {
  render() {
    const { name, price, img_url, onPressItem, } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPressItem}>
        <Image source={{ uri: img_url, }} style={styles.imageStyle} />
        <View style={styles.nameItem}>
          <View style={styles.name}>
            <StyleText size={12}>{name}</StyleText>
          </View>
          <View>
            <StyleText bold size={10}>
              {Formatters.displayPrice(price)}
            </StyleText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: 140,
    width: WIDTH_ITEM,

    marginTop: Metrics.getBaseUnitFactor(2),

    borderRadius: 10,

    elevation: 3,
    justifyContent: 'space-between',
    shadowColor: Colors.primary,
    shadowRadius: 5,
    shadowOpacity: 0.75,
    shadowOffset: { width: 0, height: 0, },

    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 170,
    width: WIDTH_ITEM,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameItem: {
    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: Metrics.getBaseUnitFactor(1),
    marginBottom: Metrics.getBaseUnitFactor(1),
  },
  name: {
    width: '60%',
  },
});
