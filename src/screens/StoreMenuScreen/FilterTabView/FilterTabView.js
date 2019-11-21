import React, { Component, } from 'react';
import { Dimensions, } from 'react-native';
import { TabView, TabBar, } from 'react-native-tab-view';

import { Colors, } from 'src/theme';

import ListMenu from './ListMenu';
import { StyleText, } from 'src/shared-components';

export default class FilterTabView extends Component {
  constructor(props) {
    super(props);
    const { routes, } = this.props;
    this.state = {
      index: 0,
      routes,
    };
  }

  _renderScene = () => {
    const { routes, index, } = this.state;
    const { componentId, } = this.props;
    let select = routes[index];
    return <ListMenu menu={select.menu} componentId={componentId} />;
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
        style={{ backgroundColor: '#fff', height: 35, }}
        tabStyle={{ minHeight: 10, }}
        renderLabel={({ route, focused, }) => (
          <StyleText
            medium
            style={{
              fontSize: 15,
            }}
            color={focused ? Colors.primary : null}
          >
            {route.title}
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
      />
    );
  }
}
// const styles = StyleSheet.create({
//   scene: {
//     flex: 1,
//   },
// });
