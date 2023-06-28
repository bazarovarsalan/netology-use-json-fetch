import { useEffect, useState } from 'react'



export default function useJsonFetch (url:string, initValue:{status:string}) {
    const [data, setData] = useState(initValue);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string|null|unknown>(null);



    const fetcher = async () => {
        setLoading(true)
        try {
          await fetch(url)
          .then(response => response.json())
          .then(data => setData(data))
        } catch (error) {
          setError(error)
        } finally {
            setLoading(false)
        }
      }
    
      useEffect( () => {
        fetcher()
      },[])
    return [data, loading, error]
}


