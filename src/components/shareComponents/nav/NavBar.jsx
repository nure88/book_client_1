import { useContext, useState } from 'react';
import NavLinks from './NavLinks';
import { CiLogin, CiLogout } from "react-icons/ci";
import navbarIcons from "../../../../public/headerIcons.png";
import userImg from "../../../assets/unnamed.png";
import { Link } from 'react-router';
import AuthContext from '../authContext/AuthContext';
import Button from '../ShareButton/Button';
import Switch from '../../pages/swtich/Switch';
const NavBar = () => {
  const{user,userLogout} = useContext(AuthContext);

  const useSignOut = () => {
 userLogout();
  };

    return (
       <div className="navbar bg-base-100 shadow-sm w-full container rounded-b-2xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
       <NavLinks />
      </ul>
    </div>
    <div className='flex items-center space-x-2'>
   <img className='size-12' src={navbarIcons} alt="book img" />
   <h2 className='font-bold'>The Book Haven</h2>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <NavLinks />
    </ul>
  </div>
  
  <div className="navbar-end">
    {/* toggle btn */}
    <Switch />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="update user profile"
            src={`${user? user?.photoURL : userImg}`} />
        </div>
      </div>

      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col items-center justify-center">
       
      {
user? <>
<div className='flex flex-col items-center justify-center w-full'>
  <button className='btn font-bold cursor-pointer' onClick={useSignOut}>Logout <CiLogout size={20}/></button>
  <span className='w-full p-2 bg-pink-400/25 text-center m-0.5'>{user && user.displayName}</span>
<span className='bg-purple-300/25 p-2 w-full text-center'>{user? user?.email : "alomnure@1010@gmail.com"}</span>
</div>
</>
: <Link to="/login" type='button' className='btn flex items-center font-bold cursor-pointer'><CiLogin size={20} color='' className='mr-2'/> Login</Link>
      }
      </ul>
    </div>
    <div className='m-3'>
      <Button to="/register">
          Register Now
      </Button>
      
    </div>
  </div>
</div>
    );
};

export default NavBar;