import React from 'react';
import { ActivityIndicator, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';

export default class OverlaySpinner extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,

    // Note: Container style will override other container props
    containerStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
  };
  static defaultProps = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'white',
    containerStyle: {},
  };

  render() {
    const { containerStyle, backgroundColor, color, } = this.props;
    const style = { backgroundColor, };
    return (
      <ActivityIndicator
        color={color}
        style={[styles.container, style, containerStyle,]}
        size={'large'}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
