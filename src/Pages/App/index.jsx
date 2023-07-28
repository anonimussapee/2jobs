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
import { NotFound } from '../NotFound'
import { Perfils } from '../Perfils'


const AppUI = () => {
  const {user, dtDb, usersDt, loading, setSincronize,logOut, setNewPost} = useFireBase()
  // console.log('user at app',user);
  const AppRoutes = () =>{ 
  
    const routesList =[
    {path:'/',element:!user?.emailVerified?<Login/> : <Home loading={loading} user={user} dtDb={dtDb} usersDt={usersDt}/>},
    {path:'/home',element:!user?.emailVerified ?<Login/> : <Home loading={loading} user={user} dtDb={dtDb} usersDt={usersDt} />},
    {path:'/postform',element:<PostPage setNewPost={setNewPost} user={user} />},
    {path:'/terms',element:<Terms/>},
    {path:'/privacy',element:<Privacy/>},
    {path:'/erase',element:<Erase/>},
    {path:'/login',element:<Login/>},
    {path:'/perfil',element:<Perfil user={user} usersDt={usersDt} setSincronize={setSincronize}/>},
    {path:'/signin',element:<Login/>},
    {path:'/signout',element:<SignOut user={user} logOut={logOut} usersDt={usersDt}/>},
    {path:'/signout',element:<SignOut user={user} logOut={logOut} usersDt={usersDt}/>},
    {path:'/perfils/:slug',element:<Perfils dtDb={dtDb} usersDt={usersDt}/>},
    {path:'/*',element:<NotFound />},
    ]

    const routes = useRoutes(routesList)
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