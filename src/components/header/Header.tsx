import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './img/logo.png';
import './styles.css'

const Header = () =>{
    const location = useLocation();
    const checked = (str:string)=>{
        return location.pathname===str?"Heade__checked":""
    }
    return(

    <header className="Header">
        <section className="container Header__section">
            <nav>
                <ul className="Header__ul">
                    <li className={`Header__li ${checked('/')}`}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className={`Header__li ${checked('/characters')}`}>
                        <Link to="/characters">
                            Characters
                        </Link>
                    </li>
                </ul>
            </nav>
                <img className="Header__img" src={logo} alt=""/>
        </section>
    </header>
    )
}

export {Header};