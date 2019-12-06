import { Fonts, Colors, } from '../theme';

export const DefaultStyle = {
  topBar: {
    title: {
      color: '#414141',
      fontSize: 15,
      fontFamily: Fonts.Default.medium,
      alignment: 'center',
    },
    background: {
      color: '#FFFFFF',
    },
    rightButtons: [
      {
        color: '#414141',
        fontFamily: Fonts.Default.regular,
      },
    ],
    backButton: {
      color: Colors.primary,
    },
  },
  layout: {
    // orientation: ['portrait',], // Force orientation
  },
  bottomTabs: {
    drawBehind: false,
  },
  statusBar: {
    style: 'dark',
    // Android only
    backgroundColor: 'rgba(255, 255, 255, 0.00001)',
    drawBehind: true,
  },
};

export const HideNavBarStyle = {
  ...DefaultStyle,
  topBar: {
    visible: true,
    height: 0,
  },
};

export const HideBottomTabStyle = {
  ...DefaultStyle,
  bottomTabs: {
    visible: false,
    drawBehind: true,
    animate: true,
  },
};

export const StatusLightBehind = {
  topBar: {
    visible: true,
    height: 0,
  },
  layout: {
    // orientation: ['portrait',], // Force orientation
  },
  bottomTabs: {
    visible: false,
    drawBehind: true,
    animate: true,
  },
  statusBar: {
    style: 'light',
    // Android only
    backgroundColor: 'rgba(255, 255, 255, 0.00001)',
    drawBehind: true,
  },
};

export const HideBottomTabAndNormalTopBar = {
  topBar: {
    title: {
      color: '#414141',
      fontSize: 15,
      fontFamily: Fonts.Default.medium,
      alignment: 'center',
    },
    background: {
      color: '#FFFFFF',
    },
    rightButtons: [
      {
        color: '#414141',
        fontFamily: Fonts.Default.regular,
      },
    ],
    backButton: {
      color: Colors.primary,
    },
    topMargin: 15,
  },
  bottomTabs: {
    visible: false,
    drawBehind: true,
    animate: true,
  },
  statusBar: {
    style: 'dark',
    // Android only
    backgroundColor: 'white',
    drawBehind: false,
  },
};
