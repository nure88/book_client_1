import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import LoadingPage from '../../shareComponents/LoadingPage/LoadingPage';
import AuthContext from '../../shareComponents/authContext/AuthContext';

const BookDetails = () => {
    const[singleBook, setSingleBook] = useState({});
    const[loading, setLoading] = useState(true);
    const{user} = useContext(AuthContext);
const {id} = useParams();
const navigate = useNavigate();

useEffect(()=> {
  if(!user?.accessToken) return;
  setLoading(true);
fetch(`http://localhost:5000/books/${id}`,{
  headers:{
     authorization: `Bearer ${user.accessToken}`
  }
})
.then((res) => res.json())
.then((data) => {
    setSingleBook(data.result)
setLoading(false);
})
.catch((error) => {
    console.log(error.message);
    
})
},[id]);

if(loading){
  return <LoadingPage />
}

const handleDelete = () => {
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

fetch(`http://localhost:5000/books/${id}`,{
  method: "DELETE"
})
.then((data) => {
  navigate("/all-books")
   Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
})
.catch((error) => {
  console.log(error.message);
  
})
   
  }
});
};
    return (
       <div className='min-h-[calc(100vh-105px)] flex items-center justify-center bg-gray-300'>
       <div className="hero bg-gray-200 w-130 lg:w-200 md:w-140 hover:md:w-130 hover:md-h hover:scale-105 duration-1000 transition-transform object-cover">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={singleBook?.coverImage} alt={singleBook?.title}
      className="w-[200px] rounded-lg shadow-2xl"
    />
    <div className='text-black dark:text-white'>
      <h1 className="text-3xl font-bold">{singleBook?.title}</h1>
    <div className='w-97 flex-row-reverse'>

          <p className="py-6">
    {
        singleBook?.summary
    }
      </p>
    </div>
    <div className='flex justify-center space-x-10'>
      <button className="delete-btn z-10" onClick={handleDelete}>Delete</button>
    <Link className='edit-btn' to={`/update-book/${singleBook?._id}`}>Update Book</Link>
    </div>
    </div>
  </div>
</div>
       </div>
    );
};

export default BookDetails;