import React, { Component, } from 'react';
import { Dimensions, StyleSheet, } from 'react-native';
import { TabView, SceneMap, TabBar, } from 'react-native-tab-view';
import PropTypes from 'prop-types';

import { Colors, Metrics, } from 'src/theme';
import { StyleText, } from 'src/shared-components';

import OrderActive from './OrderActive';
import OrderHistory from './OrderHistory';

export default class MyOrderScreen extends Component {
  static propTypes = {
    onGetTransaction: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onGetTransaction, } = this.props;
    onGetTransaction && onGetTransaction();
  }

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Active', },
      { key: 'second', title: 'History', },
    ],
  };

  orderActive = () => {
    const { componentId, dataTransaction, } = this.props;
    return (
      <OrderActive
        componentId={componentId}
        dataTransaction={dataTransaction}
      />
    );
  };

  orderHistory = () => {
    const { componentId, } = this.props;
    return <OrderHistory componentId={componentId} />;
  };

  _renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        activeColor={Colors.primary}
        inactiveColor={Colors.inActiveBtmTabColor}
        indicatorStyle={{
          height: 2,
          // width: 50, TODO: style again here
          backgroundColor: Colors.primary,
        }}
        style={{ backgroundColor: Colors.background, height: 40, elevation: 0, }}
        tabStyle={{ minHeight: 20, }}
        renderLabel={({ route, focused, }) => (
          <StyleText
            medium
            style={{
              fontSize: 15,
            }}
            color={focused ? Colors.primary : Colors.inActiveBtmTabColor}
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
        renderScene={SceneMap({
          first: this.orderActive,
          second: this.orderHistory,
        })}
        onIndexChange={(index) => this.setState({ index, })}
        initialLayout={{ width: Dimensions.get('window').width, }}
        renderTabBar={this._renderTabBar}
        style={styles.container}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.getBaseUnitFactor(3),
  },
});
