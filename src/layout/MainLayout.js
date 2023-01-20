import React from 'react';
import Headers from '../component/Headers';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';


export const MainLayout = () => {
    return (
        <div>
            <Headers />
            <Navbar />
            <Footer />
        </div>
    )
}