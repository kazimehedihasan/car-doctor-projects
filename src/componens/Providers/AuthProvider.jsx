/* eslint-disable react/prop-types */
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password);
}

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password);

}

const logOut = () => {
    setLoading(true)
    return signOut(auth);

}
const provider = new GoogleAuthProvider();

const googlerlogin =() => {
    setLoading(true);
return signInWithPopup(auth,provider )
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
        console.log('current user', currentUser);
    })
    return () => {
        return unsubscribe()

    }
    },[])
    
const authInfo = {
user,
loading,
createUser,
signIn,
logOut,
googlerlogin
}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;