import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='p-52 h-screen'>
            <h1 className='text-8xl text-center my-auto font-bold pb-8 dark:text-gray-800'>Oops!!!</h1>
            <p className='text-4xl text-center pb-8 text-red-500'>404 - PAGE NOT FOUND</p>
            <p className='text-xl text-center pb-6'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <div className='w-full flex'>
            <Link to={'/home'} className='dark:bg-gray-800 mx-auto text-white px-6 py-3 rounded-full'>Go To Homepage</Link>
            </div>
        </div>
    );
};

export default NotFound;