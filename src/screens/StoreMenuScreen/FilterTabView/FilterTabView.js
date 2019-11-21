import React, { Component, } from 'react';
import { Text, Dimensions, } from 'react-native';
import { TabView, TabBar, } from 'react-native-tab-view';

import { Colors, } from 'src/theme';

import ListMenu from './ListMenu';

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

  // _renderTabBar() => {

  // }

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={(index) => this.setState({ index, })}
        initialLayout={{ width: Dimensions.get('window').width, }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            activeColor={Colors.primary}
            inactiveColor={Colors.inActiveBtmTabColor}
            indicatorStyle={{
              backgroundColor: Colors.primary,
              height: 3,
            }}
            style={{
              backgroundColor: '#fff',
              height: 40,
            }}
            renderLabel={({ route, }) => (
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                {route.title}
              </Text>
            )}
          />
        )}
      />
    );
  }
}
// const styles = StyleSheet.create({
//   scene: {
//     flex: 1,
//   },
// });
