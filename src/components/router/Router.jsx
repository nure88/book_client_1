import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "./Root";

import AllBooks from "../pages/AllBooksPage/AllBooks";
import AddBook from "../pages/AddBook";
import MyBooks from "../pages/MyBooks";
import Register from "../auth/Register";
import ErrorPage from "../shareComponents/error/ErrorPage";
import LoadingPage from "../shareComponents/LoadingPage/LoadingPage";
import Login from "../auth/Login";
import RouterProvider from "../../privateRoute/RouterProvider";
import Home from "../pages/home/Home";
import UpdateBook from "../pages/UpdateBook";
import BookDetails from "../pages/AllBooksPage/BookDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/add-book",
        element: <RouterProvider>
          <AddBook />
        </RouterProvider>,
      },
      {
        path: "/my-books",
        element: (
          // <RouterProvider>
            <MyBooks />
          // </RouterProvider>
        ),
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook />,
      },
      {
        path: "/book/:id",
        element: <RouterProvider>
          <BookDetails />
        </RouterProvider>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
