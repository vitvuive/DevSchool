import React, { Component, } from 'react';
import { View, StyleSheet, ToastAndroid, } from 'react-native';
import { Metrics, Colors, } from 'src/theme';
import { StyleText, StyledButton, } from 'src/shared-components';
class ApplyPromotion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StyleText color={Colors.border} bold size={17}>
          {'Promo Code'}
        </StyleText>
        <StyledButton
          title={'Apply'}
          containerStyle={styles.buttonStyle}
          onPress={() =>
            ToastAndroid.show('Will be new function', ToastAndroid.SHORT)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Metrics.getBaseUnitFactor(5),

    borderBottomColor: Colors.border,
    borderBottomWidth: 0.5,

    alignItems: 'center',
    justifyContent: 'space-around',

    marginBottom: Metrics.getBaseUnitFactor(),
    marginTop: Metrics.getBaseUnitFactor(4),
    paddingBottom: Metrics.getBaseUnitFactor(2),
  },
  buttonStyle: {
    paddingHorizontal: Metrics.getBaseUnitFactor(3),
  },
});

export default ApplyPromotion;
