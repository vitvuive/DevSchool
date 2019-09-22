import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, } from 'react-native';
import { Metrics, } from '../../theme';

const Touchable = Metrics.isAndroid
  ? TouchableOpacity
  : TouchableNativeFeedback;

export default class StyleTouchable extends React.Component {
  render() {
    const { touchableStyle, onPress, children, } = this.props;
    return (
      <View>
        <Touchable style={touchableStyle} onPress={onPress}>
          {children}
        </Touchable>
      </View>
    );
  }
}
