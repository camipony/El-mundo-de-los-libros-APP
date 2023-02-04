
import { createContext, useContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword , 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithPopup} from 'firebase/auth'
import { auth } from '../firebase';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error('Theres is not auth provider')
    return context;
}


export function AuthProvider ({children}){

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    
const signin = async(email, password) => {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(credentials)
}

const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
}

const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
}

const logout = () => signOut(auth)

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe();
    }, [] )
    return (<authContext.Provider value = {{ signup, signin , user, logout , loading, loginWithGoogle , resetPassword}}>{children}</authContext.Provider>
    )
}