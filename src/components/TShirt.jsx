import React from 'react';

const TShirt = ({ tshirt }) => {
    const { name, picture, _id, price, gender } = tshirt


    console.log(tshirt)
    return (
        <div className='border p-5 rounded-lg'>
            <img className='h-[250px] mx-auto ' src={picture} />
        </div>
    );
};

export default TShirt;