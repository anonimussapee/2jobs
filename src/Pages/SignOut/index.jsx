import { useFireBase } from '../../Components/useFIreBase'
import { useNavigate } from 'react-router-dom'

const SignOut = () => {

  const {user, logOut} = useFireBase()

  const email=user?.email || '' 

  const navegate = useNavigate()
 

  return (
    <section className='w-[90%] min-w-[320px] h-[80vh] flex flex-col justify-center items-center'>
      <h1 className='text-center font-bold text-[2.3rem]'>Sessión abierta: </h1>
      <div className='flex flex-col w-[100%] min-w-[288px] max-w-[400px] gap-10 p-10'>
        <p>Tu email: </p>
        <p>{email}</p>
        <button onClick={()=>{
          logOut()
          navegate('/login')
          }} className='rounded-lg bg-gray-500 border-white text-white'>Cerrar sessión</button>
      </div>
    </section>
  )
}
export {SignOut}