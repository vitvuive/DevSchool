import React, { Component, } from 'react';
import { View, StyleSheet, Dimensions, } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, } from 'react-native-maps';

let { width, height, } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 10.8403397;
const LONGITUDE = 106.6797019;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  componentDidMount() {
    const { getLocation, } = this.props;
    getLocation && getLocation();
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.region}
          showsUserLocation
          // onRegionChange={(region) => this.setState({ region, })}
          onRegionChangeComplete={(region) => this.setState({ region, })}
          showsMyLocationButton
        >
          {!!this.state.latitude && !!this.state.longitude && (
            <Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}
              title={'Your Location'}
            />
          )}
        </MapView>
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
