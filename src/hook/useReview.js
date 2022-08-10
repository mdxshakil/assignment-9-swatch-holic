import { useEffect } from "react";
import { useState } from "react"

const useReview = () =>{
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviewData.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return [reviews,setReviews];
}

export default useReview;