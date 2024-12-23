import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false)
    const [apiData, setApiData] = useState(null)
    const [serverError, setServerError] = useState(null)
    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async () =>{
            try{
                const resp = await axios.get(url)
                const data = await resp?.data

                setApiData(data)
                setIsLoading(false)
            }catch (error) {
                serverError(error)
                setIsLoading(false)
            }
            
        }
        fetchData()
    },[url])
  return (
    { isLoading, apiData, serverError }
  )
}

export default UseFetch