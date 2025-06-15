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
             <div  className="min-h-[calc(100vh-386px)]">

            <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Mains;