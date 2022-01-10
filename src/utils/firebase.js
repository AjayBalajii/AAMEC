// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuO70563d7-EaEectWqjkm_Kl1iLrLZVM",
    authDomain: "attendance-ca4eb.firebaseapp.com",
    projectId: "attendance-ca4eb",
    storageBucket: "attendance-ca4eb.appspot.com",
    messagingSenderId: "713320631000",
    appId: "1:713320631000:web:9f7689e891b9c8f85a65ad",
    measurementId: "G-8BJ3ZR1B5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;