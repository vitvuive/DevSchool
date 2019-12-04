import React, { Component, } from 'react';
import { Dimensions, } from 'react-native';
import { TabView, TabBar, } from 'react-native-tab-view';

import { Colors, } from 'src/theme';

import ListMenu from './ListMenu';
import { StyleText, } from 'src/shared-components';

export default class FilterTabView extends Component {
  constructor(props) {
    super(props);
    const { category, } = this.props;
    this.state = {
      index: 0,
      routes: category,
    };
  }

  _renderScene = () => {
    const { routes, index, } = this.state;
    const { componentId, merchantId, } = this.props;
    const categoryId = routes[index].id;
    return (
      <ListMenu
        key={categoryId}
        categoryId={categoryId}
        merchantId={merchantId}
        componentId={componentId}
      />
    );
  };

  _renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        activeColor={Colors.primary}
        inactiveColor={Colors.inActiveBtmTabColor}
        indicatorStyle={{
          backgroundColor: Colors.primary,
          height: 2,
        }}
        style={{ backgroundColor: '#fff', height: 40, }}
        tabStyle={{ minHeight: 10, }}
        renderLabel={({ route, focused, }) => (
          <StyleText
            key={route.id}
            medium
            style={{
              fontSize: 15,
            }}
            color={focused ? Colors.primary : null}
          >
            {route.name}
          </StyleText>
        )}
      />
    );
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={(index) => this.setState({ index, })}
        initialLayout={{ width: Dimensions.get('window').width, }}
        renderTabBar={this._renderTabBar}
        // style={styles.container}
      />
    );
  }
}
