import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDyqAb3qGQHGXybkkwddNka-FIZ1YeVFHA",
  authDomain: "vuefire0683.firebaseapp.com",
  projectId: "vuefire0683",
  storageBucket: "vuefire0683.appspot.com",
  messagingSenderId: "682131849654",
  appId: "1:682131849654:web:517cfc189b4e139b474117"
};


//tambahkan code untuk menginisialisasikan Firebase
const firebaseApp = initializeApp(firebaseConfig);

//tambahkan code untuk menginisialisasikan Realtime Database 
//dan mendapatkan referensi ke database tersebut
export const db = getDatabase(firebaseApp);