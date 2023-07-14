import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import './cardUser.css'

const CardUserIntro = (props) => {

  const [panel , setPanel ] = useState(false)

  const iconRender = panel ? (<ChevronUpIcon className='w-10 h-10 '/>) :(<ChevronDownIcon className='w-10 h-10 '/>)
  
  const sizeHeigth = panel ? 'h-auto' : 'h-[17.5rem]'

  return (
    <>
      <div className={`w-[90%] min-w-[288px]  ${sizeHeigth}  flex flex-col gap-1  bg-white overflow-hidden`} >
        {/* image name and specialty*/}
        <div className='img bgUser flex flex-col gap-1 justify-center items-center bg-gray-200 w-[100%] h-[18rem] py-3 rounded-t-xl relative'>
          <img src={props.user.photoURL||''} alt={props.user.displayName} className='w-[100px] h-[100px] rounded-full'/>
          <div className='bg-blur relative w-[200px] h-[60px] text-center flex flex-col gap-0 '>
            <p className='roboto cursor-pointer'>{props.user.displayName}</p>
            <p>Desarrollador web</p>
          </div> 
        </div> 
        {/* quantity of the contacts  */}
        <div className='w-[100%] p-4 bg-gray-200'>
          <div className='flex gap-5 '>
            <p>Contactos</p>
            <p className='text-cyan-500 font-bold'>4</p>
          </div>
          <p className='underline underline-offset-4 decoration-cyan-500 cursor-pointer font-medium'>Conocer mas personas</p>
        </div>
        {/* link to the articles of interest */}
        <div className='w-[100%] p-4 bg-gray-200 font-medium cursor-pointer'>
          <p className='underline underline-offset-4 decoration-cyan-500'>Articulos que te interesan</p>
        </div>
        {/* section of clubs, events, and his reaction */}
        <div className='w-[100%] p-4 bg-gray-200 font-medium cursor-pointer text-cyan-600'>
          <p>Clubs</p>
          <p>Eventos</p>
          <p>Reacciones</p>
        </div>
      </div>
      <div className='w-[90%] min-w-[300px] h-auto flex justify-center py-2 hover:bg-gray-300  rounded-b-xl font-bold text-gray-700 gap-3 cursor-pointer' onClick={()=>{setPanel(!panel)}}>
        <p>{panel ? 'Ocultar':'Mostrar Mas'}</p>{iconRender}
      </div>    
    </>

  )

}

export {CardUserIntro}