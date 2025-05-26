import { useLoaderData, useNavigate } from 'react-router-dom'
import Card from '../Components/Card';
import { FetchData } from '../utils/FetchData'


const Home = () => {

  const { apiPath } = useLoaderData();



  const navigate = useNavigate();

  const { data: movies } = FetchData(apiPath);


  return (
    <div className='h-full mt-30 sm:mt-35 lg:mt-25 md:px-8 px-0'>

      {/* welcome banner  */}

      <div className='m-3'>
        <div className="mx-auto bg-gray-100 p-4 rounded-lg w-full md:max-w-3xl shadow-md">
          <h1 className="ibm text-xl md:text-2xl text-yellow-700 font-semibold">Welcome to PopcornTimeX 🍿</h1>
          <p className="text-gray-500 mt-2">
            Discover the latest and greatest in movies-from top-rated blockbusters to upcoming hits. Stream, explore, and enjoy cinematic moments all in one place.
          </p>
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded transition duration-300 cursor-pointer" onClick={() => navigate("/upcoming")}>
            Explore Now
          </button>
        </div>
      </div>

      <main className='mt-10 px-2'>
        <h1 className='text-lg md:text-xl text-yellow-700 font-semibold '>Your Guide To Great Movies</h1>

        {/* card container  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-x-5 gap-y-8'>

          {Array.isArray(movies?.results) && movies.results.map((mo) => (
            <Card key={mo.id} movie={mo} />
          ))}




        </div>
      </main>
    </div>
  )
}

export default Home