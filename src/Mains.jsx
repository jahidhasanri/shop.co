import React from 'react';
import Head from './Head';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

const Mains = () => {
    return (
        <div>
            <Head></Head>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mains;