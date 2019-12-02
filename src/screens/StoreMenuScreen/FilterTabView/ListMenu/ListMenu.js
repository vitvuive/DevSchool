import React, { Component, } from 'react';
import { FlatList, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';

import { Metrics, Colors, } from 'src/theme';
import ItemMenu from './ItemMenu';
export default class ListMenu extends Component {
  static propTypes = {
    onGetMenu: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { onGetMenu, } = this.props;
    onGetMenu && onGetMenu();
  }

  _keyExtractor = ({ id, }) => id;

  _renderItem = ({ item, }) => {
    const { componentId, } = this.props;
    return <ItemMenu {...item} componentId={componentId} />;
  };
  render() {
    const { results, } = this.props;

    return (
      <FlatList
        data={results}
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
