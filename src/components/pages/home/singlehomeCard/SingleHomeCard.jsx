import React from 'react';

const SingleHomeCard = (book) => {
    const singleBook = book.book
    console.log(book.book);
    
    return (
      <div className="card bg-base-100 mb-4 mt-4 hover:scale-105 duration-1000 transition-transform flex mx-auto">
  <figure className='shadow p-2 w-[150px] bg-gray-100/5 rounded-2xl'>
    <img
    className='size-40 rounded hover:z-10'
      src={singleBook?.coverImage}
      alt={singleBook?.title} />
  </figure>
</div>
    );
};

export default SingleHomeCard;