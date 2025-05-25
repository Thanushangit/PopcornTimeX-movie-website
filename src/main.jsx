import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Rootlayout from './Layout.jsx/Rootlayout'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Popular from './Pages/Popular'
import TopRates from './Pages/TopRates'
import Upcoming from './Pages/Upcoming'

const router= createBrowserRouter([
  {path:"/" , element:<Rootlayout/>, 
    children:[
      {inder:true ,element:<Home/>},
      {path:"/popular" , element:<Popular/>},
      {path:"toprated" , element:<TopRates/>},
      {path:"upcoming" , element:<Upcoming/>},
    ],
    errorElement:<NotFound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
