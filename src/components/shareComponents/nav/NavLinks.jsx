import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = () => {
    return (
        <>
        
        <li className='mr-2 mb-2'>
            <NavLink className={({isActive}) =>isActive? "font-bold text-blue-500 bg-gray-200 rounded-full" : "text-gray-600 text-sm font-medium" } to="/">Home</NavLink>
        </li>
          <li className='mr-2'>
            <NavLink className={({isActive}) =>isActive? "font-bold text-blue-500 bg-gray-200 rounded-full" : "text-gray-600 text-sm font-medium" } to="/all-books">All Books</NavLink>
        </li>
        
         <li className='mr-2'>
            <NavLink className={({isActive}) =>isActive? "font-bold text-blue-500 bg-gray-200 rounded-full" : "text-gray-600 text-sm font-medium" } to="/add-book">Add Book</NavLink>
        </li>
           <li className='mr-2'>
            <NavLink className={({isActive}) =>isActive? "font-bold text-blue-500 bg-gray-200 rounded-full" : "text-gray-600 text-sm font-medium" } to="/my-books">My Books</NavLink>
        </li>
        {/* <li className='mr-2'>
            <NavLink className={({isActive}) =>isActive? "font-bold text-blue-500 bg-gray-200 rounded-full" : "text-gray-600 text-sm font-medium" } to="/add-book">Add Book</NavLink>
        </li> */}
        </>
    );
};

export default NavLinks;