import React from 'react';
import { Text, } from 'react-native';
import PropTypes from 'prop-types';

export default class StyledText extends React.Component {
  static propTypes = {
    size: PropTypes.number.isRequired,
  };
  render() {
    const { children, style, size, ...textProps } = this.props;
    const _style = {
      fontSize: size,
    };
    return (
      <Text style={[_style, style,]} {...textProps}>
        {children}
      </Text>
    );
  }
}
