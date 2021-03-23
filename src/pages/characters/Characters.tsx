import * as React from 'react';
import { busca } from '../../api/api';
import {Persona} from '../../app/Persona'

const Characters = () =>{
    const defaul:Persona[] = []
    const [personas,setPersonas] = React.useState(defaul);
    React.useEffect(()=>{
        busca('/Persona',setPersonas);
    })
    return (
        <main className="container">
            <ul>
                {personas.map}
            </ul>
        </main>    
    );
}