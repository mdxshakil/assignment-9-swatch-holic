import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, picture, comment } = review;
    return (
        <div className='pb-8'>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
                <div class="flex justify-end px-4 pt-4">
                </div>
                <div class="flex flex-col items-center pb-10">
                    <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={picture} alt=""></img>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                        <span class="text-md text-gray-500 dark:text-gray-400">"{comment}"</span>
                </div>
            </div>






        </div>
    );
};

export default Review;