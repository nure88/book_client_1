import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const UpdateBook = () => {
const[updateBook, setupdateBook] = useState({});
const {id} = useParams();
// console.log(id,updateBook);


useEffect(()=>{
fetch(`http://localhost:5000/books/${id}`)
.then((res) => res.json())
.then((data) => {
   // console.log(data.result);
   setupdateBook(data.result);
})
.catch((error)=> {
   console.log(error);
   
})
},[id]);

    const handleAddNewBookSubmit = (e) => {
       e.preventDefault();
    

   const newBook = {
  title: e.target.name.value,
  author: e.target.author.value,
  genre: e.target.genre.value,
  rating: e.target.rating.value,
  summary: e.target.summary.value,
  coverImage: e.target.url.value,
  userEmail: e.target.email.value,
};


    fetch(`http://localhost:5000/books/${id}`, {
      method: "PUT",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newBook),
     
    })
    .then((res) => res.json())
  .then((data) => {
   if(data.success){
//  toast.success("book add successfully!")

   }
  })
  .catch((err) => {
   toast.error(err.message)
  })

    };

    return (
          <div className='min-h-[calc(100vh-105px)] flex flex-col items-center justify-center'>
            <ToastContainer position='top-right'/>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
     <form onSubmit={handleAddNewBookSubmit}>

           <fieldset className="fieldset">
         <div className='flex flex-col  justify-center space-x-3'>
            {/*this is book name field */}
             <label className="label font-bold underline decoration-1">Update Name:</label>
          <input name='name' defaultValue={updateBook?.title}  type="text" className="input" />
         </div>
          
            <div className='flex flex-col justify-center space-x-3'>
             <label className="label font-bold underline decoration-1">update Author Name:</label>
          <input name='author' defaultValue={updateBook?.author} type="text" className="input" />
         </div>
             <div className='flex flex-col justify-center space-x-3'>
                {/*this is genre name field*/}
             <label className="label font-bold underline decoration-1">update Genre Name:</label>
          <input name='genre' defaultValue={updateBook?.genre} type="text" className="input" />
         </div>

            <div className='flex flex-col justify-center space-x-3'>
                {/*this is rating field*/}
             <label className="label font-bold underline decoration-1">update Rating:</label>
          <input name='rating' defaultValue={updateBook?.rating} type="text" className="input" />
         </div>
           <div className='flex flex-col justify-center space-x-3'>
                {/*this is summmary field*/}
             <label className="label font-bold underline decoration-1">update description:</label>
       <textarea defaultValue={updateBook?.summary} name="summary" className='input h-25'></textarea>
         </div>

         
             <div className='flex flex-col justify-center space-x-3'>
                {/*this is image field*/}
             <label className="label font-bold underline decoration-1">update Image URL:</label>
          <input defaultValue={updateBook?.coverImage} name='url' type="url" className="input" />
         </div>
         
             <div className='flex flex-col justify-center space-x-3'>
                {/*this is email field*/}
             <label className="label font-bold underline decoration-1">update User Email:</label>
          <input defaultValue={updateBook?.userEmail} name='email' type="email" className="input" plac/>
         </div>
          <button className="btn bg-[rgb(38,38,38)] text-gray-400 mt-4" type='submit'>submit</button>
        </fieldset>
     </form>
      </div>
    </div>
     </div>
    );
};

export default UpdateBook;