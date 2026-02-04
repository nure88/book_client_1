import React from 'react';

const SingleHomeCard = ({book}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm mt-3 hover:scale-110 duration-1000 transition-transform">
  <figure>
    <img className='size-60 rounded-2xl'
      src={book?.coverImage}
      alt="Shoes" />
  </figure>
 
  
</div>
  );
};

export default SingleHomeCard;