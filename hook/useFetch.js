import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const url = `https://deliveryplusrnc.azurewebsites.net/api/foods/${endpoint}/Get`

    const options = {
        method: "GET",
        url: url,
        // headers: {
        //   "X-RapidAPI-Key": '',
        //   "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        // },
        // params: { ...query },
      }

    const fetchData = async () => {
        setLoading(true);
    
        try {
          const response = await axios.request(options)
          console.log(response.data)
          setData(response.data);

          setLoading(false);
        } catch (error) {
          setError(error);
          console.log(error)
        } finally {
          setLoading(false);
        }
      }

    //   fetch(url)
    //     .then(response => response.json())
    //     .then((json)=>setData(json))
    //     .catch((error)=>console.log(error))
    //     .finally(()=> setLoading(false))

    useEffect(()=>{
        fetchData()
      },[])

      const refetch = () => {
        setLoading(true)
        fetchData()
      }

      return { data, loading, error, refetch }
}

export default useFetch