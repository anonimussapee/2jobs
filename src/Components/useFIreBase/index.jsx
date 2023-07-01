import { useEffect, useState } from 'react'
import { auth } from '../Firebase/'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const useFireBase = () => {

  const [user, setUser] = useState(false);

  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth,(user)=>{
      console.log(user)
      if(user){
        const {uid, email, phothoURL,displayName} = user
        setUser({uid, email, phothoURL,displayName})
      }else{
        setUser(null)
      }
    })
    return () => unsuscribe()
  },[]);

  const registerUser = (email, password) => createUserWithEmailAndPassword(auth,email,password)

  const loginUser =  (email, password) =>signInWithEmailAndPassword(auth,email,password)

  const logOutUser = () => signOut(auth);

  return {
    user,
    setUser,
    registerUser,
    loginUser,
    logOut:logOutUser
  }
}
export {useFireBase}