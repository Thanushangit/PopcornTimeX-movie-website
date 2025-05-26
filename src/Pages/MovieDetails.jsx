
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const MovieDetails = () => {

  const param = useParams();
  const [movie, setMovie] = useState([])

  const key = "836765eecf20ad7a82688a5224e6eb5a";


  const [url] = useState(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${key}`)

  useEffect(() => {
    function Fet() {
      fetch(url)
        .then((result) => result.json())
        .then((da) => setMovie(da))
        .catch((err) => console.error("Error fetching sigle movie details:", err));
    }

    Fet();
  }, [url]);

  


  const img = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";


  function CalculateTime(t) {
    let time;

    if (t < 60) {
      time = `${t}m`;
    } else {
      const hours = Math.floor(t / 60);
      const minutes = t % 60;
      time = `${hours}h ${minutes}m`;
    }

    return time;
  }



  return (
    <main className='px-2 mt-30 sm:mt-35 lg:mt-25 h-full'>
      <div className='mx-auto w-full md:w-4xl flex flex-col md:flex-row md:items-start gap-5 h-full'>
        <div className='h-full w-full md:w-1/3 overflow-hidden'><img src={img} alt="" className='w-full h-full object-cover object-center' loading='lazy' /></div>

        <div className='h-full w-full md:w-2/3'>
          <h1 className='text-lg md:text-xl text-yellow-700 font-semibold my-2'>{movie.title}</h1>
          <p className='text-gray-500'>{movie.overview}</p>

          <div className='flex items-center gap-4  mt-3 overflow-hidden'>

            {
              Array.isArray(movie?.genres) && movie.genres.map((re, ind) => {
                return (
                  <button key={ind} className='text-sm py-1 px-2 outline-0 border-0 bg-red-500 text-white font-semibold rounded shadow-2xl'>{re.name}</button>
                )
              })
            }
          </div>

          <div className='flex items-center text-sm gap-1 mt-2'>
            <div className='flex items-center gap-1'>
              <p className="text-yellow-500"><FaStar /></p>
              <p>{movie.vote_average ? movie.vote_average.toFixed(2) : ""} | </p>
            </div>
            <div className='flex items-center gap-1'>
              <p className='text-green-600 text-lg'><MdGroups /></p>
              <p>{movie.vote_count} reviews</p>
            </div>
          </div>

          <table className='border border-gray-300 w-2/3 md:w-1/2 mt-3 shadow text-sm'>
            <tbody>
              <tr>
                <td className='border border-gray-300 px-2 py-1 font-bold text-gray-900'>Runtime</td>
                <td className='border border-gray-300 px-2 py-1'>{CalculateTime(movie.runtime)}</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-2 py-1 font-bold text-gray-900'>Budget</td>
                <td className='border border-gray-300 px-2 py-1'>{movie.budget}</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-2 py-1 font-bold text-gray-900'>Revenue</td>
                <td className='border border-gray-300 px-2 py-1'>{movie.revenue}</td>
              </tr>
              <tr>
                <td className='border border-gray-300 px-2 py-1 font-bold text-gray-900'>Release Date</td>
                <td className='border border-gray-300 px-2 py-1'>{movie.release_date}</td>
              </tr>
            </tbody>
          </table>

          <Link target='_blank' to={`https://www.imdb.com/title/${movie.imdb_id
            }/`}>
            <button className='bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 py-1 px-2 border-0 rounded my-2 text-white cursor-pointer'>View in IMDB</button>
          </Link>

        </div>

      </div>
    </main>
  )
}

export default MovieDetails