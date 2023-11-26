import { useEffect, useState } from "react";
import { Product } from "../dtos/product";
 
const usePaginatedFetch = (url : string, method : 'GET'|'POST' |'PUT', headers ?: any, body ?: any) => {
  const [data, setdata] = useState<Product[]>([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
 
  useEffect(() => {
    let optionalParams : any = {
        method : method
    }
    if(headers){
        optionalParams.headers = headers
    }
    if(body){
        optionalParams.body = body
    }
    if(method )

    fetch(url, {
        ...optionalParams
    })
    .then((res) => res.json())
    .then((_data) => {
        seterror(_data.error)
        setdata([...data,..._data])
        setloading(false)
    })
  }, [url]);
 
  return { data, loading, error };
};
 
export default usePaginatedFetch;