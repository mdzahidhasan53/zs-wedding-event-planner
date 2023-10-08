// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrU0QIynlXYmrytuzF5-H2rD_LvOlem18",
  authDomain: "zs-wedding-event-planner.firebaseapp.com",
  projectId: "zs-wedding-event-planner",
  storageBucket: "zs-wedding-event-planner.appspot.com",
  messagingSenderId: "448364952739",
  appId: "1:448364952739:web:e97fe29a3e616e96621316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;