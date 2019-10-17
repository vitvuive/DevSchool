import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
const screenHOC = (Provider, store) => (WrappedComponent) => {
  class Wapper extends React.Component {
    constructor(props) {
      super(props);
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
