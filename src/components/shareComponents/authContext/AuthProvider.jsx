import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.config';

const AuthProvider = ({children}) => {
 const[user, setUser] = useState("");
const[loading, setLoading] = useState(true);
// console.log(user);

const createUser = (email,password) =>{
    setLoading(true);
 return createUserWithEmailAndPassword(auth, email,password);
};

const userLogout = () => {
signOut(auth);
};

const userLogin = (email, password) => {
    setLoading(true);
return signInWithEmailAndPassword(auth,email,password);
};

const updateUserProfile = (updateData) => {
return updateProfile(auth.currentUser,updateData)
};

const authInfo = {
createUser,
userLogin,
user,
setUser,
loading,
setLoading,
userLogout,
updateUserProfile
};


useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
   setUser(currentUser);
//current user er bitor accestoken ace ki na 
//  console.log(currentUser);
   
    setLoading(false);
    })
    return () => {
        unsubscribe();
    }
},[]);


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;