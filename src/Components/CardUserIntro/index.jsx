import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import './cardUser.css'
import { useNavigate } from 'react-router-dom'

const CardUserIntro = (props) => {

  // console.log(props.usersDt.find(item=>item.uid===props.user.uid));

  // aqui buscamos al usuario en nuestra base de datos de firebase para renderizar los datos que tenemos en la base de datos users, usando el user.uid que nos envian en las props 
  let thisUser = props.usersDt.find(item=>item.uid===props.user.uid)
  //  si en caso de no existir sus datos en la base de datos se renderiza la prop user que nos envian
  if(!thisUser){
    // thisUser se sobreescribe con los datos de la prop user
    thisUser=props.user
  }
  // este estado nos sirve para mostrar el panel de "mostrar mas" informacion del usuario
  const [panel , setPanel ] = useState(false)
  // aqui cambiamos el icono dependiendo si esta abierto
  const iconRender = panel ? (<ChevronUpIcon className='w-10 h-10 '/>) :(<ChevronDownIcon className='w-10 h-10 '/>)

  // aqui cambiamos el tamaño del panel para que asi se pueda renderizar deacuerdo si clickean en el boton de mostrar mas
  const sizeHeigth = panel ? 'h-auto' : 'h-[22rem]'

  const navigate = useNavigate();

  return (
    <>
      <div className={`w-[90%] min-w-[288px]  ${sizeHeigth}  flex flex-col gap-1  bg-white overflow-hidden drop-shadow-xl`} >
        {/* image name and specialty*/}
        <div className='img bgUser flex flex-col gap-1 justify-center items-center bg-gray-200 w-[100%] h-[22rem] py-3 rounded-t-xl relative' style={{backgroundImage:`url(${thisUser.banner || 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})`}}>
          <img src={thisUser.photoURL||''} alt={thisUser.displayName} className='w-[100px] h-[100px] rounded-full object-cover'/>
          <div className='bg-blur relative w-min-[270px] w-auto w-max-[500px] px-5 h-min-[60px] h-[10rem] items-center justify-center flex flex-col gap-0 ' onClick={()=>navigate('/perfil')}>
            <p className='roboto text-[2.2rem] cursor-pointer text-shadow font-extrabold'>{thisUser.displayName}</p>
            <p className='text-shadow font-bold cursor-pointer'>{thisUser.profession || '-----'}</p>
          </div> 
        </div> 
        {/* quantity of the contacts  */}
        <div className='w-[100%] p-4 bg-gray-200'>
          <div className='flex gap-5 '>
            <p>Contactos</p>
            <p className='text-cyan-500 font-bold'>{thisUser?.contacts || 0}</p>
          </div>
          <p className='underline underline-offset-4 decoration-cyan-500 cursor-pointer font-medium'>Conocer mas personas</p>
        </div>
        {/* section of clubs, events, and his reaction */}
        <div className='w-[100%] p-4 bg-gray-200 font-medium cursor-pointer '>
          <p className=' text-cyan-600'>Mis intereses:</p>
          <p>{thisUser?.interests || '' }</p>
        </div>
      </div>
      <div className='w-[90%] min-w-[300px] h-auto flex justify-center py-2 hover:bg-gray-300  rounded-b-xl font-bold text-gray-700 gap-3 cursor-pointer ' onClick={()=>{setPanel(!panel)}}>
        <p>{panel ? 'Ocultar':'Mostrar Mas'}</p>{iconRender}
      </div>    
      <div className='w-[90%] min-w-[300px] h-auto flex justify-center py-2 hover:bg-gray-300  rounded-b-xl font-bold text-gray-700 gap-3 cursor-pointer mb-5' onClick={()=>navigate('/postform')}>
        <p><RocketLaunchIcon className='w-10 h-10 inline'/>Postear una oferta</p>
      </div>   
    </>

  )

}

export {CardUserIntro}