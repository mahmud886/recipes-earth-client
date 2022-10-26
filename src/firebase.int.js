// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBD6pvl0qA_4WA5dPBS7CuBso-U8Q0lyLY',
    authDomain: 'recipes-earth.firebaseapp.com',
    projectId: 'recipes-earth',
    storageBucket: 'recipes-earth.appspot.com',
    messagingSenderId: '156193382423',
    appId: '1:156193382423:web:d8d3a64b1d5a9e3e90fc52',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
