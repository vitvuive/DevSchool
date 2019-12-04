import React, { Component, } from 'react';
import { StyleSheet, ScrollView, } from 'react-native';
import PropType from 'prop-types';

import { OverlaySpinner, } from 'src/shared-components';

import PromotionList from './PromotionList';
import BannerHome from './BannerHome';
export default class HomeScreen extends Component {
  static propsType = {
    isLoading: PropType.bool.isRequired,
  };

  shouldComponentUpdate({ isLoading, }) {
    return this.props.isLoading !== isLoading;
  }

  render() {
    const { componentId, isLoading, } = this.props;
    return (
      <ScrollView style={styles.container}>
        <BannerHome />
        <PromotionList componentId={componentId} />
        {!!isLoading && <OverlaySpinner />}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
});
