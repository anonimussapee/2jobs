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
import { Perfil } from '../Perfil'
import { PostPage } from '../PostPage'


const AppUI = () => {
  const {user, dtDb, usersDt, loading} = useFireBase()
  // console.log('user at app',user);
  const AppRoutes = () =>{ 
  
    const routes = useRoutes([
    {path:'/',element:!user?.emailVerified?<Login/> : <Home loading={loading} user={user} dtDb={dtDb} usersDt={usersDt}/>},
    {path:'/home',element:!user?.emailVerified ?<Login/> : <Home loading={loading} user={user} dtDb={dtDb} usersDt={usersDt} />},
    {path:'/postform',element:<PostPage user={user} />},
    {path:'/terms',element:<Terms/>},
    {path:'/privacy',element:<Privacy/>},
    {path:'/erase',element:<Erase/>},
    {path:'/login',element:<Login/>},
    {path:'/perfil',element:<Perfil user={user} usersDt={usersDt}/>},
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