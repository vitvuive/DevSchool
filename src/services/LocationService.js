import { NativeModules, } from 'react-native';

const LocationServiceModule = NativeModules.LocationService;

const LocationService = {
  testNativeModule() {
    LocationServiceModule.toastText();
  },
  checkLocation() {
    LocationServiceModule.checkLocation();
  },
};

export default LocationService;
