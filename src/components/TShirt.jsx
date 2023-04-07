import React from 'react';

const TShirt = ({ tshirt }) => {
    const { name, picture, _id, price, gender } = tshirt


    console.log(tshirt)
    return (
        <div className='border p-5 rounded-lg'>
            <img className='h-[250px] mx-auto ' src={picture} />
            <h4 className='text-center my-3 text-lg font-semibold text-amber-600'>{name}</h4>
            <p className='font-semibold bg-sky-900 w-fit px-1 text-yellow-300 rounded-sm'>Price: ${price}</p>
            <button className='bg-amber-800 font-semibold px-3 py-1 rounded-md text-amber-400 mt-2 hover:bg-amber-400 hover:text-amber-800 transition duration-300'>Buy Now</button>
        </div>
    );
};

export default TShirt;