import React, { Component, } from 'react';
import { FlatList, StyleSheet, } from 'react-native';
import ItemMenu from './ItemMenu';
import { Metrics, Colors, } from 'src/theme';
export default class ListMenu extends Component {
  _keyExtractor = ({ name, }) => name;

  _renderItem = ({ item, }) => {
    const { componentId, } = this.props;
    return <ItemMenu {...item} componentId={componentId} />;
  };
  render() {
    const { menu, } = this.props;
    return (
      <FlatList
        data={menu}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        style={styles.flatlistStyle}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    );
  }
}

const styles = StyleSheet.create({
  flatlistStyle: {
    flex: 1,

    paddingHorizontal: Metrics.getBaseUnitFactor(2),
    paddingBottom: Metrics.getBaseUnitFactor(7),
    backgroundColor: Colors.background,
  },
  row: {
    // flex: 1,
    justifyContent: 'space-between',
  },
});
