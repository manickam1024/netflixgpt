// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-gLhHxwMnYeweL8MyVREA9RqCIeUSOfc',
  authDomain: 'netflixgpt-c976e.firebaseapp.com',
  projectId: 'netflixgpt-c976e',
  storageBucket: 'netflixgpt-c976e.firebasestorage.app',
  messagingSenderId: '755966994064',
  appId: '1:755966994064:web:e0f6d535b1e53039af9a15',
  measurementId: 'G-F1BYDJKKXF',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default firebaseConfig
