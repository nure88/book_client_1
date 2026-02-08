import React, { useEffect, useState } from 'react';
import LoadingPage from '../../shareComponents/LoadingPage/LoadingPage';

const TopGenres = () => {
    const[topBook, setTopBook] = useState([]);
    const[loading, setLoading] = useState(true);
    // console.log(topBook);
    
    useEffect(()=> {
        fetch("http://localhost:5000/top-genres")
        .then((res) => res.json())
        .then((result) => {
 setTopBook(result);
 setLoading(false);
        })
        .catch((err)=>{
            console.log(err.message);
            
        })
    },[]);
    if(loading){
        return <LoadingPage />
    }
    return (
<div className="card w-50 shadow-sm mx-auto bg-gray-200 hover:scale-105 duration-1000 transition-transform">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Top Genres</span>
  
  {
    topBook.map((topBook) => (
        <div className='object-cover'>
            <img className='flex mx-auto rounded h-[200px] ' src={topBook.coverImage} alt="" />
        </div>
    ))
  }
   
  </div>
</div>
    );
};

export default TopGenres;