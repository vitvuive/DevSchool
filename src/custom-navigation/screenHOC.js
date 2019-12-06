import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, } from 'react-native-navigation';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { DefaultStyle, } from './NavigationStyles';
import ComponentIdMap from './ComponentIdMap';

// Helper functions to extract data
const getNavigationStyle = R.pathOr(DefaultStyle, ['navigationStyle',]);
const getTitle = R.pathOr('', ['title',]);

const screenHOC = (Provider, store) => (WrappedComponent) => {
  // Get component style or use a default if it doesn't have one
  const navigationStyle = getNavigationStyle(WrappedComponent);
  class Wapper extends React.Component {
    static propType = {
      componentId: PropTypes.string,
      componentId_Key: PropTypes.string.isRequired,
      title: PropTypes.string,
    };

    static options() {
      return navigationStyle;
    }

    constructor(props) {
      super(props);

      const { componentId, componentId_Key, } = this.props;
      this.componentId_Key = componentId_Key || componentId;
      ComponentIdMap.addComponentId({
        componentId_Key: this.componentId_Key,
        componentId: componentId,
      });
    }

    componentDidMount() {
      this._setTitle();
    }

    componentWillUnmountMount() {
      if (this.componentId_Key === 'root') return;
      ComponentIdMap.removeComponentId({
        componentId_Key: this.componentId_Key,
      });
    }

    _setTitle() {
      const { title, } = this.props;
      // Skip, if there is already have a title pass as a props
      // RNN will handle the title in this case
      if (title) return;
      // Try to the screen title
      const _title = getTitle(WrappedComponent);
      // Apply the title if found
      if (_title) {
        Navigation.mergeOptions(this.props.componentId, {
          topBar: {
            title: {
              text: _title,
            },
          },
        });
      }
    }

    render() {
      return (
        <Provider store={store}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  }
  hoistNonReactStatics(Wapper, WrappedComponent);
  return Wapper;
};

export default screenHOC;
