import * as React from 'react';
import { busca } from '../../api/api';
import { Intro } from '../../app/Intro';
import image from './img/flcl.png'
import './styles.css'

const Home = () =>{
    const defaultIntro:Intro = {
        descriptin: "",
        title: "",
    }
    const [info,setIntro] = React.useState(defaultIntro)
    React.useEffect(()=>{
        busca('/intro',setIntro);   
    })
    return (
        <main className="container">
            <h1>
                {info.title}
            </h1>
            <section className="img__contaimer">
                <img className="Home__img" src={image} alt=""/>
            </section>
            <p>
                {info.descriptin}
            </p>
        </main>
    )
}

export {Home};