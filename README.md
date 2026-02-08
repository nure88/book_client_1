<!-- Navbar & Footer -->

Navbar:

Links: Home, All Books, Add Book, My Books, Login/Register

Conditional rendering:

If logged in → show photoURL + displayName on hover + LogOut button

If not logged in → show Login/Register

Footer:

Copyright text

Simple design

Responsiveness: Hamburger menu for small screens


<!--  Home Page -->

Banner:

Animated text or background

Buttons: All Books, Create Book

Dynamic Section:

Latest 6 books from MongoDB

Use Axios GET /books?limit=6&sort=createdAt

Static Sections (choose 2):

Top Genres: display genres with images

Book of the Week: highlight a book

About The Book Haven: intro about site

Optional: Dark/Light mode toggle



<!--  CRUD Operations -->

Add Book

Form: Title, Author, Genre, Rating, Summary, Cover Image, User Email/Name

Upload image via imgbb API

POST to /books

Show success toast

All Books

Table: Title, Author, Genre, Rating

Sort functionality (e.g., by Rating)

View Details button → /book-details/:id

Book Details

Show full book info

Optional: comments & reviews section

Protected route

Update Book

Pre-filled form

PATCH request /books/:id

Show confirmation toast

Delete Book

Delete button → DELETE /books/:id

Show confirmation toast

My Books

Table of user-added books

Update/Delete buttons functional

Protected route



///


In short:=======>

React → To build the UI

React Router → For route management

Tailwind CSS + DaisyUI + Styled Components → For styling

Axios → To fetch/post data from MongoDB / backend

Firebase → For authentication (Login/Register/Google Login/Forget Password)

React-Toastify / SweetAlert2 → For success/error notifications

Swiper → Carousel/slider for the home page banner