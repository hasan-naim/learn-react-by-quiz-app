// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: process.env.RECT_APP_API_KEY,
  authDomain: process.env.RECT_APP_UTH_DOMAIN,
  projectId: process.env.RECT_APP_PROJECT_ID,
  storageBucket: process.env.RECT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.RECT_APP_MESSAGING_SENDER_ID,
  appId: process.env.RECT_APP_APP_ID,
});

export default app;
