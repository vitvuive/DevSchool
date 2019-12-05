import React, { Component, } from 'react';
import { View, ActivityIndicator, StyleSheet, Image, } from 'react-native';
import PropTypes from 'prop-types';

import StyleTouchable from '../StyleTouchable';
import StyleText from '../StyleText';
import { Metrics, Colors, } from '../../theme';

export default class StyledButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired, // maybe change
    icon: PropTypes.any,
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
      icon,
    } = this.props;
    return (
      <StyleTouchable onPress={this._onPress}>
        <View style={[styles.container, containerStyle, { backgroundColor, },]}>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={loadingColor} />
          ) : (
            <View style={styles.wrapper}>
              {icon && (
                <Image
                  source={icon}
                  style={[styles.iconStyle, { tintColor: textColor, },]}
                />
              )}
              <StyleText medium size={15} color={textColor}>
                {title}
              </StyleText>
            </View>
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

    shadowOffset: { width: 10, height: 10, },
    elevation: 6,
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: Colors.primary,

    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  wrapper: {
    flexDirection: 'row',
  },
  iconStyle: {
    height: 20,
    width: 20,
    marginRight: Metrics.getBaseUnitFactor(0.5),
  },
});
