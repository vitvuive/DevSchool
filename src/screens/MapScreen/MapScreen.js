import React, { Component, } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import Propstype from 'prop-types';

import { IconAssets, } from 'src/assets';
import { Metrics, } from 'src/theme';

let { width, height, } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 10.8215599;
const LONGITUDE = 106.7633488;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class MapScreen extends Component {
  static propsType = {
    region: Propstype.object.isRequired,
    dataFake: Propstype.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
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

  _onCarouselItemChange = (index) => {
    const { dataFake, } = this.props;

    let location = dataFake[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });

    this.state.markers[index].showCallout();
  };

  _onMarkerPress = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });

    this._carousel.snapToItem(index);
  };

  _renderItem = ({ item, }) => {
    const { onPressPush, componentId, } = this.props;
    return (
      <TouchableOpacity onPress={() => onPressPush(componentId)}>
        <Image style={styles.cardCarousel} source={item.banner} />
      </TouchableOpacity>
    );
  };

  _renderMarker = () => {
    const { dataFake, } = this.props;
    return dataFake.map((marker, index) => (
      <Marker
        ref={(ref) => (this.state.markers[index] = ref)}
        key={marker.merchant.name}
        coordinate={{
          latitude: marker.latitude,
          longitude: marker.longitude,
        }}
        title={marker.merchant.name}
        image={IconAssets.Soda}
        onPress={() => this._onMarkerPress(marker, index)}
      >
        <Callout>
          <Text>{marker.merchant.name}</Text>
        </Callout>
      </Marker>
    ));
  };

  render() {
    const { dataFake, } = this.props;
    return (
      <View style={styles.wrapper}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={(map) => (this._map = map)}
          style={styles.map}
          initialRegion={this.state.region}
          showsUserLocation
          // onRegionChange={this.onRegionChange}
          // onRegionChangeComplete={(region) => this.setState({ region, })}
          showsMyLocationButton
        >
          {this._renderMarker()}
        </MapView>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          containerCustomStyle={styles.carousel}
          data={dataFake}
          renderItem={this._renderItem}
          sliderWidth={width}
          itemWidth={300}
          onSnapToItem={(index) => this._onCarouselItemChange(index)}
          layout={'stack'}
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
  carousel: {
    position: 'absolute',
    bottom: Metrics.getBaseUnitFactor(),
  },
  cardCarousel: {
    height: 150,
    width: '100%',

    borderRadius: 10,
  },
});
