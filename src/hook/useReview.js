import { useEffect } from "react";
import { useState } from "react"

const useReview = (data) =>{
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch(data)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return [reviews,setReviews];
}

export default useReview;