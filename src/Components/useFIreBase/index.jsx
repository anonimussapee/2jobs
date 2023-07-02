import { useEffect, useState } from 'react'
import { auth } from '../Firebase/'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

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
      await sendEmailVerification(userCredential.user);
      console.log('Correo electrónico de verificación enviado.');
      return userCredential.user;
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      throw error;
    }
  };

  const loginUser =  (email, password) =>signInWithEmailAndPassword(auth,email,password)

  const loginWithGoogle = async () =>{
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth,provider)
      return userCredential.user
    } catch (error) {
      console.error('error al iniciar sesión con google', error)
      throw error
    }
  }

  const logOutUser = () => signOut(auth);

  return {
    user,
    setUser,
    registerUser,
    loginUser,
    logOut:logOutUser,
    loginWithGoogle
  }
}
export {useFireBase}