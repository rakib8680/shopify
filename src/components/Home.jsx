import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './TShirt';

const Home = () => {

    const tShirts = useLoaderData();

    return (
        <div className='grid grid-cols-12 gap-10 container mx-auto'>
            <div className='col-span-8 grid grid-cols-3 gap-6 '>
            {
                tShirts.map(tshirt => <TShirt tshirt={tshirt} key={tshirt._id}></TShirt>)
            }
            </div>
            <div className='col-span-4'>
                order summery
            </div>
        </div>
    );
};

export default Home;