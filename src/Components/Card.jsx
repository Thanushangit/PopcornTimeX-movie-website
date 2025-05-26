import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Card = (props) => {
  const { title, poster_path,id, overview, vote_average
    , vote_count } = props.movie;

    

  const img = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";
  return (
    <Link to={`/${id}`}>
      <div title={title} className='overflow-hidden rounded-tr-sm rounded-tl-sm border border-gray-200 mb-3 shadow transition-all duration-200'>
        <div className='w-full h-64'>
          <img src={img} alt="image" loading='lazy' className='object-center object-cover w-full h-full' />
        </div>

        <div className='p-3'>
          <h1 className='text-xl font-semibold text-yellow-500 cascadia tracking-wider text-overflow-wrap-title'>{title}</h1>
          <p className='text-gray-700 text-overflow-wrap'>{overview}</p>

          <div className='flex items-center justify-between gap-3 mt-3'>
            
              <button className='py-1 px-3 outline-0 hover:text-white font-semibold hover:bg-yellow-500 transition-all duration-200 border border-yellow-500 rounded text-yellow-500 cursor-pointer'>Read More</button>
           
            <div className='flex items-center text-sm gap-1'>
              <p className="text-yellow-500"><FaStar /></p>
              <p>{vote_average.toFixed(2)} </p>
              <p>| {vote_count} reviews</p>
            </div>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default Card