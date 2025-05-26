import { IoLogoGithub } from "react-icons/io";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' w-full flex items-center justify-center text-gray-500 my-2'>
     
        <h1>&copy; {new Date().getFullYear()} All rights reserved S.Thanushan.</h1>
        <div className="ml-1"><Link title='Source Code' target="_blank" to={"https://github.com/Thanushangit/PopcornTimeX-movie-website"}  className='hover:text-gray-700'><IoLogoGithub />  </Link></div>

      
    </div>
  )
}

export default Footer