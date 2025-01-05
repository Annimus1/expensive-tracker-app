// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,  updateProfile, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useContext } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Create auth 
const auth = getAuth(app);
// create Google Provider
const provider = new GoogleAuthProvider();


async function createUser(email: string, password: string, displayName: string, phoneNumber: number): Promise<string>
{
  let result;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(auth.currentUser, { displayName: displayName , phoneNumber: phoneNumber});
    
    console.log(user.uid);
    result = user.uid;
  
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      // console.error(error);
    }
    result = null;
  }

  finally{
    return result;
  }
}

async function SignInWithGoogle(): Promise<string> {
  let res
  await signInWithPopup(auth, provider)
  .then( async (result) => {
    const user = await result.user;

    console.log("return: ", user.uid);
    res = user.uid;

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    res = null;
  });

  return res;
}

export {app, createUser, SignInWithGoogle};