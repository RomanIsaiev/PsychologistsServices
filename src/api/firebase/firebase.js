// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'; // TODO:
import { getAuth } from 'firebase/auth';
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration // For Firebase JS SDK v7.20.0 and
const firebaseConfig = {
  apiKey: 'AIzaSyBXl9gws_sejXYduJkbmvYYYiqSqrsP4jw',
  authDomain: 'psychologistsservices-ad47f.firebaseapp.com',
  projectId: 'psychologistsservices-ad47f',
  storageBucket: 'psychologistsservices-ad47f.appspot.com',
  messagingSenderId: '110100121291',
  appId: '1:110100121291:web:50d4feeb2d5875c571fd4e',
  measurementId: 'G-CRH5W2R3V6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
