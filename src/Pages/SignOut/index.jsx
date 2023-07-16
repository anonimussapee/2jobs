import { useFireBase } from '../../Components/useFIreBase'
import { useNavigate } from 'react-router-dom'

const SignOut = (props) => {

  let thisUser = props.usersDt.find(item=>item.uid===props.user.uid)
  if(!thisUser){
    thisUser=props.user
  }
   
  const navegate = useNavigate()
 
  if(thisUser){
    return (
      <section className='w-[90%] min-w-[320px] h-[80vh] flex flex-col justify-center items-center'>
        <h1 className='text-center font-bold text-[2.3rem]'>Sessión abierta:</h1>
        <div className='flex flex-col w-[100%] min-w-[288px] max-w-[400px] gap-10 p-10 '>
          <img src={thisUser.photoURL} alt="" className='w-[140px] h-[140px] self-center rounded-full object-cover'/>
          <div>
            <p className='font-bold'>Usuario: </p>
            <p>{thisUser.displayName}</p>
          </div>
          
          <div>
            <p className='font-bold'>Email: </p>
            <p>{ thisUser?.email}</p>
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