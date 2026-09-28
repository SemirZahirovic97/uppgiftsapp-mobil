import Constants from 'expo-constants';
import { Platform } from 'react-native';

const host =
  Platform.OS === 'web'
    ? 'localhost'
    : Constants.expoConfig?.hostUri?.split(':')[0] ?? 'localhost';

export const API_URL = `http://${host}:5005`;