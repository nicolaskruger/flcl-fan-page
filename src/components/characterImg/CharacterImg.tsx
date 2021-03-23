import * as React from 'react';
import mamini from './img/mamimi.jpg';
import naota from './img/naota.jpg';
import haruko from './img/haruko.jpg'

interface Sw{
    naota: JSX.IntrinsicElements;
    mamimi: JSX.IntrinsicElements;
    haruko: JSX.IntrinsicElements;
}
interface CharacterImgProps {
    path:keyof Sw
}
const CharacterImg = ({path}:CharacterImgProps) =>{
    
    const sw = {
        naota: <img src={naota} alt="naota"/>,
        mamimi: <img src={mamini} alt="haruko"/>,
        haruko: <img src={haruko} alt="mamini"/>
    }
    return (
        sw[path]
    );
}

export {CharacterImg}
export type {Sw};