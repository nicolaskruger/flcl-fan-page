import * as React from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../../api/api';
import {Persona} from '../../app/Persona'
import { CharacterImg, Sw} from '../../components/characterImg/CharacterImg';
import './styles.css'

const Characters = () =>{
    const defaul:Persona[] = []
    const [personas,setPersonas] = React.useState(defaul);
    React.useEffect(()=>{
        busca('/Persona',setPersonas);
    },[])
    return (
        <main className="container">
            <ul className="character__ul">
                {personas.map(p=>(
                    <li className="character__li">
                        <Link className="character__link" to={`/persona/${p.id}`}>
                            <CharacterImg path={p.path as keyof Sw}/>
                            <section>
                                <h2>{p.name}</h2>
                                <cite>{`"${p.phase}"`}</cite>
                            </section>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>    
    );
}

export {Characters}