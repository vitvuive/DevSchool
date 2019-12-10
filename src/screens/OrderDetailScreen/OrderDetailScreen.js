import React, { Component, } from 'react';
import { View, StyleSheet, Image, TextInput, } from 'react-native';
import PropTypes from 'prop-types';

import { StyleText, StyledButton, } from 'src/shared-components';
import { Metrics, Colors, } from 'src/theme';
import { Formatters, } from 'src/services';
import { IconAssets, } from 'src/assets';
export default class OrderDetailScreen extends Component {
  static propTypes = {
    onAddCart: PropTypes.func.isRequired,
  };

  render() {
    const { name, price, img_url, onAddCart, } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wapperImage}>
          <Image source={{ uri: img_url, }} style={styles.imageStyle} />
        </View>
        <View style={styles.info}>
          <View style={styles.nameWrapper}>
            <StyleText bold size={18}>
              {name}
            </StyleText>
          </View>
          <StyleText bold primary size={18}>
            {Formatters.displayPrice(price)}
          </StyleText>
        </View>
        <View style={styles.viewRequest}>
          <StyleText semiBold size={15}>
            {'Special Requests:'}
          </StyleText>
          <TextInput placeholder={'Any comment? No beansprout?'} />
        </View>
        <View style={styles.button}>
          <StyledButton
            title={'Add to Cart'}
            icon={IconAssets.AddToCart}
            textColor={'white'}
            onPress={onAddCart}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: Colors.background,
  },
  wapperImage: {
    marginTop: Metrics.getBaseUnitFactor(2),
    alignItems: 'center',
  },
  imageStyle: {
    height: 240,
    width: '100%',
  },
  info: {
    flexDirection: 'row',
    padding: Metrics.getBaseUnitFactor(2),
    justifyContent: 'space-between',
  },
  nameWrapper: {
    width: '70%',
  },
  viewRequest: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginHorizontal: Metrics.getBaseUnitFactor(2),
    paddingVertical: Metrics.getBaseUnitFactor(),
    borderColor: Colors.border,
  },
  button: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
});
