import React, { useEffect, useState } from "react";
import AllBookCard from "./AllBookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/books`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // console.log(data);
          setBooks(data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="min-h-[calc(100vh-105px)] flex flex-col items-center">
      <h2 className="font-bold font-mono">
        All Books<span className="text-blue-500 ml-2">({books.length})</span>
      </h2>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'> */}
      {books.map((book) => (
        <AllBookCard key={book._id} book={book} />
      ))}
      {/* </div> */}
    </div>
  );
};

export default AllBooks;
