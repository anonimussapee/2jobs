import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../Home'
import { Login } from '../Login'
import './App.css'
import { Navbar } from '../../Components/NavBar'
import { Layout } from '../../Components/Layout'
import { useFireBase } from '../../Components/useFIreBase'
import { Terms } from '../Terms'
import { Privacy } from '../Privacy'
import { Erase } from '../Erase'
import { SignOut } from '../SignOut'


const AppUI = () => {
  const {user, dtDb} = useFireBase()
  // console.log('user at app',user);
  const AppRoutes = () =>{ 
  
    const routes = useRoutes([
    {path:'/',element:!user?.emailVerified?<Login/> : <Home user={user} dtDb={dtDb}/>},
    {path:'/home',element:!user?.emailVerified ?<Login/> : <Home user={user} dtDb={dtDb} />},
    {path:'/terms',element:<Terms/>},
    {path:'/privacy',element:<Privacy/>},
    {path:'/erase',element:<Erase/>},
    {path:'/login',element:<Login/>},
    {path:'/signin',element:<Login/>},
    {path:'/signout',element:<SignOut/>},

  
  ])
  return routes
  }

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Layout >
        <AppRoutes/>
      </Layout>
    </BrowserRouter>
  )
}

export {AppUI}