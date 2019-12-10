import React, { Component, } from 'react';
import { FlatList, StyleSheet, View, } from 'react-native';
import PropTypes from 'prop-types';

import { Metrics, Colors, } from 'src/theme';
import ItemMenu from './ItemMenu';
export default class ListMenu extends Component {
  static propTypes = {
    onGetMenu: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  shouldComponentUpdate({ isLoading, }) {
    return this.props.isLoading !== isLoading;
  }

  componentWillMount() {
    const { onGetMenu, } = this.props;
    onGetMenu && onGetMenu();
  }

  _keyExtractor = ({ id, }) => id;

  _renderItem = ({ item, }) => {
    const { componentId, shopId, } = this.props;
    return <ItemMenu {...item} componentId={componentId} shopId={shopId} />;
  };
  render() {
    const { results, onGetMenu, isLoading, } = this.props;

    return (
      <View style={styles.flatlistStyle}>
        <FlatList
          data={results}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          onRefresh={onGetMenu}
          refreshing={isLoading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatlistStyle: {
    flex: 1,

    paddingHorizontal: Metrics.getBaseUnitFactor(2),
    paddingBottom: Metrics.getBaseUnitFactor(7),
    marginTop: Metrics.getBaseUnitFactor(2),

    backgroundColor: Colors.background,
  },
  row: {
    // flex: 1,
    justifyContent: 'space-between',
  },
});
