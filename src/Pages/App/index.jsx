import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../Home'
import { Login } from '../Login'
import './App.css'
import { Navbar } from '../../Components/NavBar'
import { Layout } from '../../Components/Layout'
import { SignUp } from '../SignUp'
import { useFireBase } from '../../Components/useFIreBase'
import { SignOut } from '../SignOut'


const AppUI = () => {
  const {user} = useFireBase()
  const AppRoutes = () =>{ 
  
    const routes = useRoutes([
    {path:'/',element:!user?<Login/> : <Home/>},
    {path:'/home',element:!user ?<Login/> : <Home/>},
    {path:'/login',element:<Login/>},
    {path:'/singin',element:<Login/>},
    {path:'/signup',element:<SignUp/>},
    {path:'/signOut',element:<SignOut/>},
  
  ])
  return routes
  }

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Layout>
        <AppRoutes/>
      </Layout>
    </BrowserRouter>
  )
}

export {AppUI}