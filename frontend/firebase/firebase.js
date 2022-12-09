import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);