import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkSYff7yoLoOgTje1q89_ClgE4ZdXjwW40",
  authDomain: "cybersphere-53fff.firebaseapp.com",
  projectId: "cybersphere-53fff",
  storageBucket: "cybersphere-53fff.firebasestorage.app",
  messagingSenderId: "325788326984",
  appId: "1:325788326984:web:f028acfd9591153b250c7d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;