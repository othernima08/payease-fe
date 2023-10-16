import React, { useEffect } from 'react';
import './loading.css'

const LoadingScreen = () => {
    return (
        <section className='loading-container'>
            <h1
                className='loading-screen-text'
                style={{animation: 'fade 2s linear infinite'}}
            >
                PayEase
            </h1>
        </section>
    );
};

export default LoadingScreen;