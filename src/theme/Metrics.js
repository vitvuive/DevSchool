import { Platform, StatusBar, Dimensions, } from 'react-native';

const { width: appWidth, height: appHeight, } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

const baseUnit = 8;
const getBaseUnitFactor = (multiplier: number = 1) => baseUnit * multiplier;

const sideMenuWidthLimit = 430;

export default {
  isAndroid,
  isIOS,
  appHeight,
  appWidth,
  sideMenuWidth:
    appWidth * 0.8 > sideMenuWidthLimit ? sideMenuWidthLimit : appWidth * 0.8,

  statusBarHeight: isAndroid ? StatusBar.currentHeight : 20, //20 is hard core status bar height on iOS

  getBaseUnitFactor,

  hoverBtmButtonHeight: getBaseUnitFactor(5),
  hoverBtmButtonContainerPadding: getBaseUnitFactor(8),
};
