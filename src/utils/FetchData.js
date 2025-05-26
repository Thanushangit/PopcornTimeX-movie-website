import { useEffect, useState } from "react";

export const FetchData = (apipath,queryTerm) => {

    const key = "836765eecf20ad7a82688a5224e6eb5a";
    const [data,setData]=useState([])

    const [url]=useState(`https://api.themoviedb.org/3/${apipath}?api_key=${key}&query=${queryTerm}`)

    useEffect(()=>{
        function Fet(){
        fetch(url)
        .then((result) => result.json())
        .then((da) => setData(da))
        .catch((err) => console.error("Error fetching data:", err));      
        }

        Fet();
    },[url]);

   return { data };

}

