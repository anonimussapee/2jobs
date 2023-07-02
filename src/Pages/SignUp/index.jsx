import { useState } from 'react'
import { useFireBase } from '../../Components/useFIreBase'
import { useNavigate } from 'react-router-dom'
import { ButtonLogin } from '../../Components/ButtonLogin'
import googleicon from '../../assets/iconGoogle.svg'


const SignUp = () => {

  const {registerUser, loginWithGoogle} = useFireBase()

  const [email, setEmail]= useState('')
  const [pass, setPass]= useState('')

  const navegate = useNavigate()
 
  const handleSubmit = async(e) => {

    e.preventDefault()
    console.log(`procesando datos del SignUp ${email} ${pass}`)

    try {
      await registerUser(email,pass)
       navegate('/home')
      
    } catch (error) {
      console.log('datos incorrectos')
    }


  }

  return (
    <section className='w-[90%] min-w-[320px] h-[80vh] flex flex-col justify-center items-center gap-10'>
      <h1 className='text-center font-bold text-[2.3rem] w-[90%] min-w-[300px] max-w-[350px]'> Registrate en la plataforma que esta cambiando la forma en la que obtenemos empleo </h1>
      <ButtonLogin loginWithGoogle={loginWithGoogle} navegate={navegate} name="Google" icon={googleicon} bg='#4285F4' bghover='#3369c0'/>
      <form onSubmit={handleSubmit} className='flex flex-col w-[100%] min-w-[288px] max-w-[400px] gap-2 p-10'>
            <input
                className='border-gray-500 border-[2px] rounded-xl p-2'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='tuemail@example.com'
            />
            <input
                className='border-gray-500 border-[2px] rounded-xl p-2'
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder='·······'

            />
            <button type='submit'  className='rounded-lg bg-gray-500 p-2 hover:bg-gray-700 border-white  text-white'>Registrar</button>
      </form>
    
    </section>
  )
}
export {SignUp}