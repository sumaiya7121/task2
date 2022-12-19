import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Main from './Layout/Main'


const router = createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
  children:[
    {

      path:'/',
      element:<Home></Home>
    },
       {

      path:'/home',
      element:<Home></Home>
    },
     {

      path:'/login',
      element:<Login></Login>
    },
     {

      path:'/register',
      element:<Register></Register>
    },
 
  ]
}

])

function App() {
  return (
<RouterProvider router={router}></RouterProvider>
  )
}

export default App;
