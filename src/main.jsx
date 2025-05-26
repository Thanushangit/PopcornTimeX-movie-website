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
import MovieDetails from './Pages/MovieDetails'
import Search from './Pages/Search'

const router= createBrowserRouter([
  {path:"/" , element:<Rootlayout/>, 
    children:[
      {index: true,element:<Home/> ,loader:()=>{return({ apiPath: "movie/now_playing" })}},
      {path:"/popular" , element:<Popular/>,loader:()=>{return({ apiPath: "movie/popular" })}},
      {path:"/toprated" , element:<TopRates/>,loader:()=>{return({ apiPath: "movie/top_rated" })}},
      {path:"/upcoming" , element:<Upcoming/>,loader:()=>{return({ apiPath: "movie/upcoming" })}},
       {path:"/search" , element:<Search/>,loader:()=>{return({ apiPath: "search/movie" })}},
      {path:":id" , element:<MovieDetails/>}
    ],
    errorElement:<NotFound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
