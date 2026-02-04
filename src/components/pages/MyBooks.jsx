import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../shareComponents/authContext/AuthContext";
import LoadingPage from "../shareComponents/LoadingPage/LoadingPage";
import AllBookCard from "./AllBooksPage/AllBookCard";

const MyBooks = () => {
    const[books, setbooks] = useState([]);
    const[loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
// console.log(user);

  useEffect(() => {
    if(!user?.email) return;
  fetch(`http://localhost:5000/my-books?email=${user.email}`)
  .then((res) => res.json())
  .then((data) => {
//  console.log(data);
 setbooks(data)
setLoading(false); 
  }).catch((err)=> {
    console.log(err.message);
    
  })
  }, [user]);
  
  if(loading){
    return <LoadingPage />
  }
  return (
<div className="min-h-[calc(100vh-105px)] flex flex-col items-center">
      <h2 className="font-bold font-mono">
        my Books<span className="text-blue-500 ml-2">({books.length})</span>
      </h2>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'> */}
      {books.map((book) => (
        <AllBookCard key={book._id} book={book} />
      ))}
      {/* </div> */}
    </div>
  );
};

export default MyBooks;
