/**
 * This transformer is for support redux-persist to transform the data
 * between AsyncStorage (key-value pair) and redux store (Immutable instances)
 *
 * NOTE: redux-persist is don't have offical support for seamless-immutable
 * from version 5+, so stick with verion 4.xx.x
 *
 * This file code is copy from the following message:
 * https://github.com/rt2zz/redux-persist/issues/133#issuecomment-299298148
 */
import R from 'ramda';
import Immutable from 'seamless-immutable';

const createTransformer = () => {
  const isImmutable = R.has('asMutable');
  const convertToJs = (state) => state.asMutable({ deep: true, });
  const fromImmutable = R.when(isImmutable, convertToJs);
  const toImmutable = (raw) => Immutable(raw);
  return {
    in: fromImmutable,
    out: (state) => {
      state.mergeDeep = R.identity;
      return toImmutable(state);
    },
  };
};

export default createTransformer();
