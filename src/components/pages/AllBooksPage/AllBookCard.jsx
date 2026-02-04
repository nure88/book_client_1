import React from 'react';
import { Link } from 'react-router';

const AllBookCard = ({book}) => {
    return (
        <div className='flex justify-center items-center space-x-2.5 h-11/12 hover:bg-purple-200 p-2 rounded-2xl'>
         <div className='h-35 flex justify-center items-center bg-gray-300 p-2 rounded-2xl'>
                        <img className='size-30 rounded' src={book?.coverImage} alt="" />
                    </div>
                   <div className='flex justify-center items-center gap-1'>
                     <div>
                        <h2 className='dark:text-black'>Book Name: {book?.title}</h2>
                    </div>
                    <div>
                                  <span className='dark:text-black'>
                                   Author: {book?.author}
                                    </span>  
                          
                       </div>
                         <div>
                                  <span className='dark:text-black'>
                                    Genre: {book?.genre}
                                    </span>  
                          
                       </div>
                         <div>
                                  <span className='dark:text-black'>
                                   Rating: {book?.rating}
                                    </span>  
                          
                       </div>
                         <div className='flex gap-3 md:space-x-2 lg:ml-2'>

                                  <Link to={`/book/${book?._id}`} className='delete-btn'>Book Details</Link> 
                                 
                       </div>
                   </div>
        </div>
    );
};

export default AllBookCard;