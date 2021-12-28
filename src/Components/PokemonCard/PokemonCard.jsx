import React from 'react'
import './PokemonCard.css'


const PokemonCard = ({ name, types, icon }) => {
    return (
            <article className='pokemoncard-main-container'>
                <figure className='icon-container'>
                    <img src={icon} alt="pokemon-icon" />
                </figure>
                <figcaption className='pokemon-name'>
                    {name}
                </figcaption>
                <h2 className='types-title'>Types: </h2>
                {
                   types && types.map(item => <p className='types'>{item.type.name}</p>)
                }
                <button className='add-button'>Add to my team</button>
            </article>
    )
}

export default PokemonCard
