import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.apiKey,
  authDomain: Constants.expoConfig?.extra?.authDomain,
  projectId: Constants.expoConfig?.extra?.projectId,
  storageBucket: Constants.expoConfig?.extra?.storageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId,
  appId: Constants.expoConfig?.extra?.appId,
}; */


const firebaseConfig = {
  apiKey: "AIzaSyChS34DmfkgwWRJsOcvhD28hHbXm_7-7LA",
  authDomain: "lfamila-1.firebaseapp.com",
  projectId: "lfamila-1",
  storageBucket: "lfamila-1.appspot.com",
  messagingSenderId: "595707843321",
  appId: "1:595707843321:web:98d7f9083325568e848828",
  measurementId: "G-PJ15SK9ZTJ"
};

const app = initializeApp(firebaseConfig);

// initialize auth; only for native platforms (Android and iOS)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
