import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3RfyZ-ZxYq6Y6Obv8toZqQi1GiFKtg8Q",
  authDomain: "basic-login-auth-e6f6b.firebaseapp.com",
  projectId: "basic-login-auth-e6f6b",
  storageBucket: "basic-login-auth-e6f6b.firebasestorage.app",
  messagingSenderId: "1057614429135",
  appId: "1:1057614429135:web:fe9bd4f85f10743a1170ba",
  measurementId: "G-PVMC6Z4LHV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
