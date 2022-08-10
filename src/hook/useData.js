import { useEffect } from "react";
import { useState } from "react"

const useData = (jsonData) =>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch(jsonData)
        .then(res => res.json())
        .then(data => setData(data))
    },[jsonData])
    return [data,setData];
}

export default useData;