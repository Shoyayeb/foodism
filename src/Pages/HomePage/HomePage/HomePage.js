import React from 'react';
import Foods from '../Foods/Foods';
import RiderSection from '../RiderSection/RiderSection';
import Banner from './../Banner/Banner';
import Features from './../Features/Features';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <RiderSection />
            <Foods />
            <Features />
        </div>
    );
};

export default HomePage;