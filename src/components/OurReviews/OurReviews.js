import React from 'react';
import useData from '../../hook/useData';
import Review from '../Review/Review';

const OurReviews = () => {
    const [reviews, setReviews] = useData('reviewData.json');
    return (
        <div>
            <div className='grid grid-cols-3 py-32'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default OurReviews;