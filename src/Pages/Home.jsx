import React from 'react';
import Banner from '../Components/Banner';
import Brands from '../Components/Brands';
import NewArriable from '../Components/NewArriable';
import Newslatter from '../Components/Newslatter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <NewArriable></NewArriable>
            <Newslatter></Newslatter>
        </div>
    );
};

export default Home;