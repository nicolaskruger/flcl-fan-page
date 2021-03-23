import * as React from 'react';
import { useHistory, useParams } from 'react-router';
import { busca } from '../../api/api';
import { Persona } from '../../app/Persona';
import { CharacterImg, Sw } from '../../components/characterImg/CharacterImg';
import './styles.css'

interface Params{
    id:string
}
const PersonaPage = () =>{
    const history = useHistory();
    const def:Persona = {
        description:"",
        id:0,
        name:"",
        path:"naota",
        phase:"",
    }
    const [persona,setPersona] = React.useState(def);
    const { id }:Params = useParams();
    React.useEffect(()=>{
        busca(`/Persona/${id}`,setPersona)
            .catch(()=>{
                history.push('/404')
            })
    },[id])
    return (
        <main className="container persona__main">
            <section className="persona__section">
                <CharacterImg path={persona.path as keyof Sw}/>
                <div className="persona__div">
                    <h2>{persona.name}</h2>
                    <cite>{`"${persona.phase}"`}</cite>
                </div>
            </section>
            <p>{persona.description}</p>
        </main>
    )
}

export {PersonaPage}