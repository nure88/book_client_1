import React from 'react';

const MinHeight = ({children}) => {
    return (
        <div className='min-h-[calc(100vh-105px)] flex flex-col items-center justify-center mx-auto'>
        {children}            
        </div>
    );
};

export default MinHeight;