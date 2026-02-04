import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../shareComponents/authContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const AddBook = () => {
  const{user} = useContext(AuthContext);
  const navigate = useNavigate();

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

  console.log(newBook);
  
    fetch(`http://localhost:5000/books`, {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
      authorization: `Bearer ${user.accessToken}`,
        "Content-type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((result) => {
    console.log(result);
    toast.success('book added successfully!')
// navigate("/all-books")
    })
    .catch((error) => {
      console.log(error.message);
      
    })
  };

  return (
    <div className="min-h-[calc(100vh-105px)] flex flex-col items-center justify-center">
      <ToastContainer position="top-right"/>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleAddNewBookSubmit}>
            <fieldset className="fieldset">
              <div className="flex flex-col  justify-center space-x-3">
                {/*this is book name field */}
                <label className="label font-bold underline decoration-1">
                  Book Title:
                </label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Book name here"
                  required
                />
              </div>

              <div className="flex flex-col justify-center space-x-3">
                <label className="label font-bold underline decoration-1">
                  Author Name:
                </label>
                <input
                  name="author"
                  type="text"
                  className="input"
                  placeholder="Author name here"
                  required
                />
              </div>
              <div className="flex flex-col justify-center space-x-3">
                {/*this is genre name field*/}
                <label className="label font-bold underline decoration-1">
                  Genre Name:
                </label>
                <input
                  name="genre"
                  type="text"
                  className="input"
                  placeholder="Genre name here"
                  required
                />
              </div>

              <div className="flex flex-col justify-center space-x-3">
                {/*this is rating field*/}
                <label className="label font-bold underline decoration-1">
                  Rating:
                </label>
                <input
                  name="rating"
                  type="text"
                  className="input"
                  placeholder="Book rating here"
                  required
                />
              </div>
              <div className="flex flex-col justify-center space-x-3">
                {/*this is summmary field*/}
                <label className="label font-bold underline decoration-1">
                  Description:
                </label>
                <textarea name="summary" className="input h-30"></textarea>
              </div>

              <div className="flex flex-col justify-center space-x-3">
                {/*this is image field*/}
                <label className="label font-bold underline decoration-1">
                  Book Image URL:
                </label>
                <input
                  name="url"
                  type="url"
                  className="input"
                  placeholder="https://lh3.googleusercontent.com/a/ACg8ocJ7sckYash4nXN6OZR6RAf4N7RiTlBr2Sc2KPWOI4qZC6tKSsE=s83-c-mo"
                  required
                />
              </div>

              <div className="flex flex-col justify-center space-x-3">
                {/*this is email field*/}
                <label className="label font-bold underline decoration-1">
                  User Email:
                </label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="User email here..."
                  required
                />
              </div>
              <button
                className="btn bg-[rgb(38,38,38)] text-gray-400 mt-4"
                type="submit"
              >
                Add New Book
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
