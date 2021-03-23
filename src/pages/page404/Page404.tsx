import React from 'react';
import image from './img/kanti.jpg'
import './styles.css'

function Page404(){
    return (
        <section className="Page404__section">
            <h1>Page not found !!!?!</h1>
            <img className="Page404__img" src={image} alt="erro"/>
        </section>
    );
}

export {Page404};