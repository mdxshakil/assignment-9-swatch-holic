import React from 'react';
import useReview from '../../hook/useReview';
import HeaderImage from '../../images/header-image.png';
import Review from '../Review/Review';

const Homepage = () => {
    const [reviews, setReviews] = useReview();
    const slicedReview = reviews.slice(0, 3);
    console.log(slicedReview);
    return (
        <div>
            <div className='flex items-center justify-between h-screen pb-5'>
                <div>
                    <div className='w-3/4 mx-auto'>
                        <h1 className='text-6xl font-bold'>Your personal & favourite daily driver.</h1>
                        <h1 className='text-5xl font-bold'>In your hand</h1>
                        <p>A portable device that is designed to be on your wrist. Like smartphones, they use touchscreen. Our smartwatch can be your great personal accompany. So what are you waiting for?</p>
                    </div>
                </div>
                <div>
                    <img className='w-3/4 mx-auto' src={HeaderImage} alt="" />
                </div>
            </div>
            <h2 className='text-4xl font-bold text-center'>Customers Review ({slicedReview.length})</h2>
            <div className='grid grid-cols-3 text-center mt-24'>
                {
                    slicedReview.map(review => <Review
                    key={review.id}
                    review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Homepage;