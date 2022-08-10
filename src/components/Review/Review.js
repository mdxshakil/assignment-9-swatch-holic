import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const Review = ({ review }) => {
    const { name, picture, comment } = review;
    return (
        <div className='pb-8'>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
                <div className="flex justify-end px-4 pt-4">
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={picture} alt=""></img>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-md text-gray-500 dark:text-gray-400">"{comment}"</span>
                    <span className='text-yellow-600 pt-2'>
                        <FontAwesomeIcon className='px-1' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='px-1' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='px-1' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='px-1' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='pl-1 text-gray-600' icon={faStar}></FontAwesomeIcon>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Review;