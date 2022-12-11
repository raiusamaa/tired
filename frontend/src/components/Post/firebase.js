import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoEhLvT33vqEbR02usrm1H7LqxQhqG7Tg",
  authDomain: "myweb-e58a5.firebaseapp.com",
  projectId: "myweb-e58a5",
  storageBucket: "myweb-e58a5.appspot.com",
  messagingSenderId: "176508551695",
  appId: "1:176508551695:web:9bbfee91939a3af2d1997a",
  measurementId: "G-H6HQM8B6Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)