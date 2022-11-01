import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register a user
export const registerUser = async (email, password, displayName) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, { displayName });
    } catch (err) {
        return err.message.replace("Firebase:", "");
    }
};

// login
export const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        return err.message.replace("Firebase:", "");
    }
};

// user observer
export const userObserver = setCurrentUser => {
    onAuthStateChanged(auth, user => {
        if (user) setCurrentUser(user);
        else setCurrentUser(null);
    });
};

// signout
export const logout = () => {
    signOut(auth);
};

export const signUpProvider = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
};

export const forgetPassword = async email => {
    try {
        await sendPasswordResetEmail(auth, email);
        return "Please Check Your Inbox";
    } catch (err) {
        return err.message.replace("Firebase:", "");
    }
};
