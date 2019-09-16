import React from "react";
import { View, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { Metrics } from "../../theme";

const Touchable = Metrics.isAndroid
  ? TouchableOpacity
  : TouchableNativeFeedback;

export default class StyleTouchable extends React.Component {
  const {touchableStyle, onPress} = this.props;
  render() {
    return (
      <View>
        <Touchable style={touchableStyle} onPress={onPress} >
        {children}
        </Touchable>
      </View>
    );
  }
}
