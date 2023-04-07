import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div className='text-center '>
            <h1 className='font-semibold text-xl'>Total items : {cart.length}</h1>
            {
                cart.map(items =>
                    <p
                        key={items.index}>{items.name}
                        <button onClick={() => removeFromCart(items._id)} className='bg-slate-200 ml-5 py-1 px-3 rounded-full mb-2'>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;