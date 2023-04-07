import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './TShirt';

const Home = () => {

    const tShirts = useLoaderData();

    return (
        <div>
            <h1>Total T-Shirts : {tShirts.length}</h1>
            {
                tShirts.map(tshirt => <TShirt tshirt={tshirt} key={tshirt._id}></TShirt>)
            }
        </div>
    );
};

export default Home;