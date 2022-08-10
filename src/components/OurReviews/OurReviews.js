import React from 'react';
import useReview from '../../hook/useReview';
import Review from '../Review/Review';

const OurReviews = () => {
    const [reviews, setReviews] = useReview();
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