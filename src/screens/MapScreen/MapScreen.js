import React, { Component, } from 'react';
import { View, StyleSheet, } from 'react-native';
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps';
export default class MapScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <MapView
          initialRegion={{
            latitude: 20.9833562,
            longitude: 105.850101,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922,
          }}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}
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
