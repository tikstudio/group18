import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

const storage = new MMKVLoader()
  .withEncryption()
  .initialize();
export default storage;

export const useStorage = (key, defaultValue) => useMMKVStorage(key, storage, defaultValue);
