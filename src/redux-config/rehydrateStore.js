import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, } from 'redux-persist';
import createTransformer from './immutableTransformer';

const persistConfig = {
  storage: AsyncStorage,
  transforms: [createTransformer,],
};

export default function rehydrateStore(store) {
  if (!store) throw new Error('Can\'t start redux without input store');
  return new Promise((resolve, reject) => {
    try {
      persistStore(store, persistConfig, () => {
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
