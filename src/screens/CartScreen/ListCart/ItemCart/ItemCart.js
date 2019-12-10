import React, { Component, } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';

import { StyleText, } from 'src/shared-components';
import { Colors, Metrics, } from 'src/theme';
import { IconAssets, } from 'src/assets';
import { Formatters, } from 'src/services';

export default class ItemCart extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
  };

  shouldComponentUpdate({ data, }) {
    return this.props.data !== data;
  }

  render() {
    const { data, onRemoveItem, } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: data.img_url,
          }}
          style={styles.image}
        />
        <View style={styles.info}>
          <StyleText medium>{data.name}</StyleText>
          <StyleText medium primary>
            {Formatters.displayPrice(data.price)}
          </StyleText>
        </View>
        <TouchableOpacity onPress={() => onRemoveItem(data.id)}>
          <Image source={IconAssets.Trash} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 90,
    borderRadius: 5,

    elevation: 1,
    shadowRadius: 5,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: Colors.primary,

    marginVertical: Metrics.getBaseUnitFactor(1),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  image: {
    height: 90,
    width: 90,

    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
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
