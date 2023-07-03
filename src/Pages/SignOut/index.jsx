import { useFireBase } from '../../Components/useFIreBase'
import { useNavigate } from 'react-router-dom'

const SignOut = () => {

  const {user, logOut} = useFireBase()
   
  const navegate = useNavigate()
 
  if(user){
    return (
      <section className='w-[90%] min-w-[320px] h-[80vh] flex flex-col justify-center items-center'>
        <h1 className='text-center font-bold text-[2.3rem]'>Sessión abierta:</h1>
        <div className='flex flex-col w-[100%] min-w-[288px] max-w-[400px] gap-10 p-10 '>
          <img src={user.photoURL} alt="" className='w-[140px] h-[140px] self-center rounded-full'/>
          <div>
            <p className='font-bold'>Usuario: </p>
            <p>{user.displayName}</p>
          </div>
          
          <div>
            <p className='font-bold'>Email: </p>
            <p>{ user?.email}</p>
          </div>
          
          <button onClick={()=>{
            logOut()
            navegate('/login')
            }} className='rounded-lg bg-gray-500 border-white text-white'>Cerrar sessión</button>
        </div>
      </section>
    )
  }else{
    return (
      <section className='w-[90%] min-w-[320px] h-[80vh] flex flex-col justify-center items-center'>
        <h1 className='text-center font-bold text-[2.3rem]'>¿Hay alguien ahí?</h1>
        <div className='flex flex-col w-[100%] min-w-[288px] max-w-[400px] gap-10 p-10'>
          
          <button onClick={()=>{
            navegate('/login')
            }} className='rounded-lg bg-gray-500 border-white text-white'>Iniciar sessión</button>
        </div>
      </section>
    )
  }
  
}
export {SignOut}