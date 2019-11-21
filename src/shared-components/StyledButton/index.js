import React, { Component, } from 'react';
import { View, ActivityIndicator, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';

import StyleTouchable from '../StyleTouchable';
import StyleText from '../StyleText';
import { Metrics, Colors, } from '../../theme';

export default class StyledButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired, // maybe change
    isLoading: PropTypes.bool.isRequired, // will change

    backgroundColor: PropTypes.any.isRequired,
    textColor: PropTypes.any.isRequired,
    loadingColor: PropTypes.any.isRequired,

    containerStyle: PropTypes.any.isRequired,
  };

  static defaultProps = {
    backgroundColor: Colors.primary,
    textColor: 'white',
    loadingColor: 'white',
    isLoading: false,
    containerStyle: {},
  };

  shouldComponentUpdate({ isLoading, title, }) {
    return this.props.isLoading !== isLoading || this.props.title !== title;
  }

  _onPress = () => {
    const { isLoading, onPress, } = this.props;
    if (isLoading) return;
    if (!onPress) return;

    onPress();
  };
  render() {
    const {
      title,
      isLoading,
      backgroundColor,
      textColor,
      loadingColor,
      containerStyle,
    } = this.props;
    return (
      <StyleTouchable onPress={this._onPress}>
        <View style={[styles.container, containerStyle, { backgroundColor, },]}>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={loadingColor} />
          ) : (
            <StyleText medium size={18} color={textColor}>
              {title}
            </StyleText>
          )}
        </View>
      </StyleTouchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.hoverBtmButtonHeight,
    marginHorizontal: Metrics.getBaseUnitFactor(3),
    marginBottom: Metrics.getBaseUnitFactor(2),
    paddingHorizontal: Metrics.getBaseUnitFactor(),

    shadowOffset: { width: 1, height: 13, },
    elevation: 6,
    shadowRadius: 15,
    shadowOpacity: 0.8,
    shadowColor: Colors.primary,

    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
});
