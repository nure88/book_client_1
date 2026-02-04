import React from 'react';

const Container = ({children}) => {
    return (
        <div className='min-h-[calc(100vh-105px)] flex flex-col items-center mx-auto'>
            {children}
        </div>
    );
};

export default Container;