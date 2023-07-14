import { useEffect, useState } from 'react'
import { auth, db } from '../Firebase/'
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

import { collection, getDocs } from "firebase/firestore"; 


const useFireBase = () => {

  const [user, setUser] = useState(false);
  const [dtDb, setDtDb] =  useState([]);
  const [sincronize, setSincronize] = useState(true);
  // const uid = auth.currentUser.uid;


  // console.log('this is data of db in useFirebase',db);
 
 
    console.log(dtDb)
      
   

  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth,(user)=>{
      // console.log(user, user.photoURL)
      if(user){
        const {uid, email, photoURL,displayName, emailVerified} = user
        setUser({uid, email, photoURL,displayName, emailVerified})
        // console.log(user)
      }else{
        setUser(null)
      }

      
    })
    return () => unsuscribe()
  },[]);

  useEffect(()=>{
      
  (async() => {
   try{
     const querySnapShot =await getDocs( collection(db, 'posts'))
           // console.log("data of query snapshot in useFirebase", querySnapShot)
           const datanew = [] 
           querySnapShot?.forEach(doc=>{
             const data = doc.data()
             console.log('this data is of foreach of querysnapshot',data)
             datanew.push(data)
           })
           setDtDb(datanew);
           setSincronize(true)
   }catch (err){
    console.error(err)
   }
  
  })()
  },[sincronize])

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

  const loginWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook:', error);
      throw error;
    }
  }

  const logOutUser = () => signOut(auth);

  return {
    user,
    setUser,
    registerUser,
    loginUser,
    logOut:logOutUser,
    loginWithGoogle,
    loginWithFacebook,
    dtDb
  }
}
export {useFireBase}


/*

Campo
author
=
Tipo
string
Valor
John
Campo
date
=
Tipo
timestamp
Fecha
13 jul 2023
Hora

23:21:00
Campo
offer
=
Tipo
string
Valor
Necesito peronal para trabajar como desarrollador web usando tecnologias como React y tailwind FULL STACK
Campo
city
=
Tipo
string
Valor
Otavalo
Campo
salary
=
Tipo
number
Valor
700
Campo
image
=
Tipo
string
Valor
https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
Campo
title
=
Tipo
string
Valor
Frontend Developer Full Stack


*/