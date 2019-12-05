import React, { Component, } from 'react';
import { StyleSheet, ScrollView, } from 'react-native';

import PromotionList from './PromotionList';
import BannerHome from './BannerHome';
export default class HomeScreen extends Component {
  render() {
    const { componentId, } = this.props;
    return (
      <ScrollView style={styles.container}>
        <BannerHome />
        <PromotionList componentId={componentId} />
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
