import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../Firebase/firebase.init';
const auth = getAuth(app);

export const AuthContext = createContext();
const userContext = ({children}) => {
 
// const[user,setUser] =useState({});
const googleProvider = new GoogleAuthProvider()

//1. create user
const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}

//2.Update name

const updateName = (name) =>{
    return updateProfile(auth.currentUser,{displayName:name})
}

//3. email varify

const emailVarify = () =>{
    return sendEmailVerification(auth.currentUser
    )
}
//4.google sign in

const signInWithGoogle = () =>{

    return signInWithPopup(auth,googleProvider)
}

//5.logout

const logOut = () =>{
    return signOut(auth)
}



const authInfo = 
{
createUser,
updateName,
emailVarify,
signInWithGoogle,
logOut}

// // useEffect(()=>{

// // const unsubscribe = onAuthStateChanged(auth, currentUser => {

// //     setUser(currentUser);
// // })
// // return () =>{
// //     unsubscribe()
// // }


// },[])

    return (<AuthContext.Provider value={authInfo}>
{children}
  </AuthContext.Provider>)
      
 
};

export default userContext;