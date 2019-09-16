import { Platform, StatusBar, Dimensions } from "react-native";

const { width: appWidth, height: appHeight } = Dimensions.get("window");
const isAndroid = Platform.OS === "android";
const isIOS = Platform.OS === "ios";

const baseUnit = 8;
const getBaseUnitFactor = (multiplier: number = 1) => baseUnit * multiplier;

const sideMenuWidthLimit = 430;

export default {
  isAndroid,
  isIOS,
  appHeight,
  appWidth,
  getBaseUnitFactor
};
