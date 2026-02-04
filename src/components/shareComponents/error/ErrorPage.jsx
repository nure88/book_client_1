import React from 'react';
import errorImage from "../../../../public/error.jpg";
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-200'>
           <div className='relative'>
             <img className='h-[300px] w-[500px]' src={errorImage} alt="error.jpg" />
            <Link className='btn bg-blue-200 hover:bg-blue-600 text-[#3A2525] hover:text-white hover:z-30 rounded-2xl font-extrabold hover:font-bold absolute -mt-[140px] ml-80' to='/'>
            <IoArrowBack />
            Go Back</Link>
           </div>

        </div>
    );
};

export default ErrorPage;