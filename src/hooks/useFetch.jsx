import { useEffect,useState } from 'react'
function useFetch(url) {
    const [data,setData]=useState(null)
    const [isPanding,setIsPanding]=useState(false)
    const [error,setError]=useState(null)

    useEffect(()=>{
        const useData = async()=>{
           try {
            setIsPanding(true)
            const res = await fetch(url)
            if(!res.ok){
                throw new Error(res.statusText)
            }
            const data =  await res.json()
            setData(data)
            setIsPanding(false)
           } catch (error) {
            setError(error.message)
            setIsPanding(false)
           }
        }

        useData()
    },[url])
  return {data,isPanding,error}
}

export default useFetch