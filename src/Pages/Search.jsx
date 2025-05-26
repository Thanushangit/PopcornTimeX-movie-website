
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from '../Components/Card';
import { FetchData } from '../utils/FetchData'


const { apiPath } = useLoaderData()
const { data: movies } = FetchData(apiPath);

const searchParams=useParams()

const Search = () => {
  return (
    <div>Search</div>
  )
}

export default Search