import React, { Component, } from 'react';
import { StyleSheet, ScrollView, } from 'react-native';
import { Colors, } from 'src/theme';

import QRCodeScreen from 'src/screens/QRCodeScreen';

export default class OrderActive extends Component {
  render() {
    const { dataTransaction, } = this.props;
    return (
      <ScrollView style={styles.container}>
        <QRCodeScreen dataTransaction={dataTransaction} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
