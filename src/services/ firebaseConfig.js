import { initializeApp } from 'firebase/app';



const app = initializeApp(firebaseConfig);

// initialize auth; only for native platforms (Android and iOS)
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
