import { useEffect, useState } from 'react'
import { auth } from '../Firebase/'
import {createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const useFireBase = () => {

  const [user, setUser] = useState(false);

  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth,(user)=>{
      console.log(user)
      if(user){
        const {uid, email, phothoURL,displayName, emailVerified} = user
        setUser({uid, email, phothoURL,displayName, emailVerified})
      }else{
        setUser(null)
      }
    })
    return () => unsuscribe()
  },[]);

  // const registerUser = (email, password) => createUserWithEmailAndPassword(auth,email,password)
  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const config={
        url :'https://twojobs.netlify.app/',
        handleCodeInApp: true,
      }
      await sendEmailVerification(userCredential.user,config);
      console.log('Correo electrónico de verificación enviado.');
      return userCredential.user;
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      throw error;
    }
  };

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