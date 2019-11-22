import React, { Component, } from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import { StyleText, StyledButton, } from 'src/shared-components';
import { Metrics, Colors, } from 'src/theme';
export default class OrderDetailScreen extends Component {
  render() {
    const { name, price, url, } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.wapperImage}>
            <Image source={{ uri: url, }} style={styles.imageStyle} />
          </View>
          <View style={styles.info}>
            <StyleText bold>{name}</StyleText>
            <StyleText bold>{`${price} đ`}</StyleText>
          </View>
        </View>
        <StyledButton
          title={'Add to Cart'}
          onPress={() => alert('viet dep trai')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
  },
  wapperImage: {
    marginTop: Metrics.getBaseUnitFactor(2),
    alignItems: 'center',
  },
  imageStyle: {
    height: 230,
    width: 200,

    borderRadius: 10,
  },
  info: {
    flexDirection: 'row',
    padding: Metrics.getBaseUnitFactor(),
    justifyContent: 'space-between',
  },
});
