import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import MapView from 'react-native-maps';
export default class MapScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
