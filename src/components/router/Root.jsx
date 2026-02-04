import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer';
import NavBar from '../shareComponents/nav/NavBar';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className=''>
                  <NavBar />
            </header>
            <main className='flex-1'>
                <Outlet />
            </main>
            <div className='w-full bg-[rgb(38,38,38)] text-white '>

         <Footer />
            </div>
        </div>
    );
};

export default Root;