import firebase from "firebase/compat/app";
import "firebase/compat/database";


// const firebaseConfig = {
//   apiKey: "AIzaSyBGxV_zI6fMGiaR3t6v-HeUItUIIDydElY",
//   authDomain: "chat-application-54bed.firebaseapp.com",
//   projectId: "chat-application-54bed",
//   storageBucket: "chat-application-54bed.appspot.com",
//   messagingSenderId: "561875884460",
//   appId: "1:561875884460:web:777ed0fffdc70922d5c209",
//   measurementId: "G-T81NG52X31",
// };


const firebaseConfig = {
  apiKey: "AIzaSyD4Iujim3WdHIBDu97bEZ3IBxvtOLfyUqI",
  authDomain: "fir-d9bc8.firebaseapp.com",
  projectId: "fir-d9bc8",
  storageBucket: "fir-d9bc8.appspot.com",
  messagingSenderId: "1050224159575",
  appId: "1:1050224159575:web:15260baa44ab5543d9ec12",
  measurementId: "G-Y3PJRBP2RY",
};

firebase.initializeApp(firebaseConfig);
export default firebase;




// commented
// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(config);
// export default firebase.database();
