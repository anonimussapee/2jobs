import { UserCircleIcon } from '@heroicons/react/24/solid'

const ButtonLogin = (props) => {
  return (
    <button onClick={()=>props.loginWithGoogle()} className='w-[200px] h-auto rounded-lg bg-gray-700 border-blue-700 border-[3px] text-white flex items-center justify-center font-extrabold p-2'><UserCircleIcon className='w-20 h-16 bg-white rounded-full text-red-700'/>Ingresar con {props.name}</button> 
  )
}
export {ButtonLogin}