import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import './style.css'
import PokemonDetail from "../PokemonDetail"


function Card({ pokemon }) {


    return (
        <div className="container-fuid">
            <div className="row">
                <div className="ml-3 card" style={{ width: '15rem', height: '20rem' }}>

                    <img className="card-img-top " src={pokemon.sprites.front_default} />
                    <div className="card-body">

                        <h5 className="card-title">{pokemon.name}</h5>
                        <PokemonDetail name={pokemon.name} type={pokemon.types.map(types => {
                            return <p>{types.type.name}</p>
                        })} wight={pokemon.weight} height={pokemon.height} ability={pokemon.abilities[0].ability.name}/>
                    </div>
                </div>
            </div>




        </div>
    )
}


export default Card;