import React, { Component, } from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import StyleTouchable from '../StyleTouchable';
import StyleText from '../StyleText';
import { Metrics, } from 'src/theme';
export default class StyledCardItem extends Component {
  state = {};
  _onPress = () => {
    const { onPress, } = this.props;
    if (!onPress) return;
    onPress();
  };
  render() {
    const {
      title,
      icon,
      tintColor,
      containerStyle,
      textColor,
      borderBottomWidth,
    } = this.props;
    return (
      <StyleTouchable onPress={this._onPress}>
        <View style={[styles.container, containerStyle, { borderBottomWidth, },]}>
          <Image
            source={icon}
            style={[
              {
                height: 17,
                width: 17,
                marginRight: 8,
              },
              { tintColor: tintColor, },
            ]}
          />
          <StyleText color={textColor} size={12}>
            {title}
          </StyleText>
        </View>
      </StyleTouchable>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 56,

    marginHorizontal: Metrics.getBaseUnitFactor(3),

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    borderBottomColor: '#D0D0D0',

    backgroundColor: '#fff',
  },
});
