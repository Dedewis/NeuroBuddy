// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMZv1WdSNzbmBMfXPL_Tl4V8AhObgzaJ0",
  authDomain: "neurobuddy-815c5.firebaseapp.com",
  projectId: "neurobuddy-815c5",
  storageBucket: "neurobuddy-815c5.appspot.com",
  messagingSenderId: "827179929782",
  appId: "1:827179929782:web:556b9681823aedb21fd617",
  measurementId: "G-CCDP8XTLM7",
};

const app = initializeApp(firebaseConfig);

// Export auth module for use in authentication components
export const auth = getAuth(app);
