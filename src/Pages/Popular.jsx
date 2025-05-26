import { useLoaderData } from "react-router-dom";
import Card from '../Components/Card';
import { FetchData } from '../utils/FetchData'


const Popular = () => {
  const { apiPath } = useLoaderData()
  const { data: movies } = FetchData(apiPath);

 


  return (
    <main className=' px-2 mt-30 sm:mt-35 lg:mt-25'>
      <h1 className='text-lg md:text-xl text-yellow-700 font-semibold '>Popular Movies</h1>

      {/* card container  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-x-5 gap-y-8'>

        {Array.isArray(movies?.results) && movies.results.map((mo) => (
          <Card key={mo.id} movie={mo} />
        ))}




      </div>
    </main>
  )
}

export default Popular