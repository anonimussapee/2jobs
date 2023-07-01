import { useState } from 'react'
import { useFireBase } from '../../Components/useFIreBase'
import { Link, useNavigate} from 'react-router-dom'

const Login = () => {

  const {loginUser} = useFireBase()

  const [email, setEmail]= useState('')
  const [pass, setPass]= useState('')

  const navegate = useNavigate()
  

  const handleSubmit = async(e) => {

    e.preventDefault()
    console.log(`procesando datos del login ${email} ${pass}`)

    try {
      await loginUser(email,pass)
      navegate('/home')

    } catch (error) {
      console.log('datos incorrectos')
    }


  }

  return (
    <section className='w-[90%] min-w-[320px] h-[80vh] flex flex-col justify-center items-center'>
      <h1 className='text-center font-bold text-[2.3rem]'> Ingresa a la plataforma que esta cambiando la forma en la que obtenemos empleo </h1>
      <form onSubmit={handleSubmit} className='flex flex-col w-[100%] min-w-[288px] max-w-[400px] gap-2 p-10'>
        <input
            className='border-black rounded-lg p-2'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='tuemail@example.com'
        />
        <input
            className='border-black rounded-lg p-2'
            type='password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder='·······'

        />
        <button type='submit' className='rounded-lg bg-gray-500 border-white text-white'>Acceder</button>
      </form>
      <Link to='/signup' ><p className='text-blue-800'>No tengo cuenta, Registrarme</p></Link>
    </section>
  )
}
export {Login}