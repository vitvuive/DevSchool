import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import PropTypes from 'prop-types';

import ComponentIdMap from './ComponentIdMap';
const screenHOC = (Provider, store) => (WrappedComponent) => {
  class Wapper extends React.Component {
    static propType = {
      componentId: PropTypes.string,
      componentId_Key: PropTypes.string.isRequired,
    };

    constructor(props) {
      super(props);

      const { componentId, componentId_Key, } = this.props;
      this.componentId_Key = componentId_Key || componentId;
      ComponentIdMap.addComponentId({
        componentId_Key: this.componentId_Key,
        componentId: componentId,
      });
    }

    componentWillUnmountMount() {
      if (this.componentId_Key === 'root') return;
      ComponentIdMap.removeComponentId({
        componentId_Key: this.componentId_Key,
      });
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
