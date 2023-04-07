import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';
import TShirt from './TShirt';
import { toast } from 'react-toastify';

const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([]);

    // add to cart 
    const handleCart = tshirt => {
        const exists = cart.find(item => item._id === tshirt._id)
        if (exists) {
            toast.error('Shirt Already added', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    };


    // remove from cart 
    const removeFromCart = id => {
        const remaining = cart.filter(item => item._id !== id)
        setCart(remaining)
    }

    return (
        <div className='grid grid-cols-12 gap-10 container mx-auto'>
            <div className='col-span-8 grid grid-cols-3 gap-6 '>
                {
                    tShirts.map(tshirt => <TShirt tshirt={tshirt} key={tshirt._id} handleCart={handleCart}></TShirt>)
                }
            </div>
            <div className='col-span-4'>
                <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;