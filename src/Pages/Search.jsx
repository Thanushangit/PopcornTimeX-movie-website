
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';
import { FetchData } from '../utils/FetchData'
import { useSearchParams } from 'react-router-dom';








const Search = () => {
  const { apiPath } = useLoaderData()
  const [searchParams]=useSearchParams()
  const queryTerm=searchParams.get("q")
  const { data: movies } = FetchData(apiPath,queryTerm);





  console.log(apiPath)
  return (
    <div className='h-full mt-30 sm:mt-35 lg:mt-25 md:px-8 px-2'>

      <h1 className='text-lg md:text-xl text-yellow-700 font-semibold '>
        {movies.length==0?`Not result found for ${queryTerm}`:`Result for ${queryTerm}`}
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-x-5 gap-y-8'>

        {Array.isArray(movies?.results) && movies.results.map((mo) => (
          <Card key={mo.id} movie={mo} />
        ))}

      </div>

    </div>
  )
}

export default Search