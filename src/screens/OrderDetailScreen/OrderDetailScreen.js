import React, { Component, } from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import { ImageAssets, } from 'src/assets';
import { StyleText, StyledButton, } from 'src/shared-components';
import { Metrics, } from 'src/theme';
export default class OrderDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={ImageAssets.Card5} style={styles.imageStyle} />
        <View style={styles.info}>
          <StyleText>{'Coffe Sua'}</StyleText>
          <StyleText>{'30.000'}</StyleText>
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

    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 180,
    width: '100%',
  },
  info: {
    flexDirection: 'row',
    padding: Metrics.getBaseUnitFactor(),
    justifyContent: 'space-between',
  },
});
