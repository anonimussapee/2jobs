import { NavLink } from 'react-router-dom'
import logo from '../../assets/2joblogo.png'
import './Navbar.css'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = (props) => {

  const [slideNavbar, setSlideNavbar] = useState(false);

  const logRender = !props.user?.emailVerified ? 'Login': 'SignOut'  
  const hiddenProp = !props.user?.emailVerified ? 'hidden': '';

  const styleActive = 'underline-offset-2 underline';

  const offSlideBar = () =>setSlideNavbar(false);

  return (
    <>
    <nav className='w-[100%] h-[5rem]  bg-gray-200 flex justify-between px-3 text-[2rem] items-center fixed top-0 z-20'>
      <ul className='flex gap-3'>
      <NavLink to="/home" className={({isActive})=> isActive ? styleActive : null }>
          <li className='flex gap-3  items-center font-extrabold'>
            <img src={logo} alt="Main Logo" className=' main-logo w-12 h-12 ' />
            <p>2Jobs</p>  
          </li>
        </NavLink>
      </ul>
      <ul className='flex gap-3 justify-center items-center ' >
      <NavLink to={`/postform`} className={`visible smMax:hidden ${({isActive})=> isActive ? styleActive : null}` }>
          <li>Postear</li>
        </NavLink>
        
        <li>
          <Bars3Icon className='w-16 h-16 ' onClick={()=>setSlideNavbar(!slideNavbar)} />
        </li>
      </ul>

    </nav>
    {
      slideNavbar &&
      <div className='fixed top-0 right-0 left-0 bottom-0 bg-[#5e5e5e4f] z-20' >
        <div className='fixed top-0 right-[280px] left-0 bottom-0  z-20' onClick={()=>setSlideNavbar(!slideNavbar)}></div>
        <div className='w-[280px] absolute top-0 bottom-0 right-0 bg-gray-200 px-3 py-2'>
          <ul className='flex flex-col gap-3 justify-center items-center text-[2rem] w-full h-auto ' >
            <li className='self-end'>
              <Bars3Icon className='w-16 h-16 ' onClick={()=>setSlideNavbar(!slideNavbar)} />
            </li>
            <NavLink to={`/postform`} className={`sm:hidden ${({isActive})=> isActive ? styleActive : null}` } onClick={offSlideBar}>
            <li>Postear</li>
            </NavLink>
            <NavLink to='/perfil' className={` ${({isActive})=> isActive ? `${hiddenProp} `+styleActive : null }`} onClick={offSlideBar}>
              <li>Perfil</li>
            </NavLink>
            <NavLink to={`/${logRender.toLowerCase()}`} className={` ${({isActive})=> isActive ? `${hiddenProp} `+styleActive : null }`} onClick={offSlideBar}>
              <li>{logRender}</li>
            </NavLink>
          
          </ul>
        </div>
      </div>
    }
    
    </>
  )
}
export {Navbar}