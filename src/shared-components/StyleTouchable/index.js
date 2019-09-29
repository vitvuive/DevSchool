import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, } from 'react-native';
import PropTypes from 'prop-types';
import { Metrics, } from '../../theme';

const Touchable = Metrics.isAndroid
  ? TouchableNativeFeedback
  : TouchableOpacity;

export default class StyleTouchable extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    touchableStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number,])
      .isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number,])
      .isRequired,
  };

  static defaultProps = {
    touchableStyle: {},
    containerStyle: {},
  };

  render() {
    const { touchableStyle, onPress, children, containerStyle, } = this.props;
    return (
      <View style={containerStyle}>
        <Touchable style={touchableStyle} onPress={onPress}>
          {children}
        </Touchable>
      </View>
    );
  }
}
