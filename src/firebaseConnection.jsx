import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCFtbeKIqke8v7aPrZojIflbGNNMtRPZUo",
  authDomain: "sa-ifro.firebaseapp.com",
  projectId: "sa-ifro",
  storageBucket: "sa-ifro.appspot.com",
  messagingSenderId: "561134958506",
  appId: "1:561134958506:web:4d1beeea1932b7af0a5dd3"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export {db, auth};
