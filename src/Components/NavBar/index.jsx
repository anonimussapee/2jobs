import { NavLink } from 'react-router-dom'
import logo from '../../assets/2joblogo.png'
import './Navbar.css'

const Navbar = (props) => {

  const logRender = !props.user?.emailVerified ? 'Login': 'SignOut'  

  const styleActive = 'underline-offset-2 underline'
  return (
    <nav className='w-[100%] h-[5rem]  bg-gray-200 flex justify-between px-3 text-[2rem] items-center fixed top-0 z-20'>
      <ul className='flex gap-3'>
      <NavLink to="/home" className={({isActive})=> isActive ? styleActive : null }>
          <li className='flex gap-3  items-center font-extrabold'>
            <img src={logo} alt="Main Logo" className=' main-logo w-12 h-12 ' />
            <p>2Jobs</p>  
          </li>
        </NavLink>
      </ul>
      <ul className='flex gap-3  ' >
        
        <NavLink to={`/${logRender.toLowerCase()}`} className={({isActive})=> isActive ? styleActive : null }>
          <li>{logRender}</li>
        </NavLink>
      </ul>
    </nav>
  )
}
export {Navbar}