import React, { Component, } from 'react';
import { View, FlatList, StyleSheet, } from 'react-native';
import ItemMenu from './ItemMenu';
export default class ListMenu extends Component {
  _keyExtractor = ({ name, }) => name;

  _renderItem = ({ item, }) => {
    return <ItemMenu {...item} />;
  };
  render() {
    const { menu, } = this.props;
    return (
      <View>
        <FlatList
          data={menu}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          style={styles.flatlistStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatlistStyle: {
    flex: 1,

    backgroundColor: '#fff',
  },
});
