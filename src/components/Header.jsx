import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='my-10 flex gap-5 justify-center text-lg font-semibold text-slate-600 '>
            <Link to='/'>Home</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/about'>About</Link>
            <Link to='/login'>Login</Link>
        </nav>
    );
};

export default Header;