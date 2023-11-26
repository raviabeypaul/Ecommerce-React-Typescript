import { useEffect, useState } from "react";
 
const useFetch = (url : string, method : 'GET'|'POST' |'PUT', headers ?: any, body ?: any) => {
  const [data, setdata] = useState<any>(null);
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
    .then((data) => {
        seterror(data.error)
        setdata(data)
        setloading(false)
    })
  }, [url]);
 
  return { data, loading, error };
};
 
export default useFetch;