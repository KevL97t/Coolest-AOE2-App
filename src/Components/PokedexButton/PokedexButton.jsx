import React from 'react'
import { MdCatchingPokemon } from 'react-icons/md'
import './PokedexButton.css'
import { useState } from 'react'
import TeamPreview from '../TeamPreview/TeamPreview'


const PokedexButton = () => {

    const [openTeam, setOpenTeam] = useState(false)

    const handleOpenTeam = () =>{
        setOpenTeam(true);
    }

    return (
        <div className='pokedex-button-main-container'>
            <div className='pokedex-button-icon-container'>
                <MdCatchingPokemon onClick={handleOpenTeam} className='pokedex-button-icon'/>    
            </div>
            {openTeam && <TeamPreview setTeamState={ setOpenTeam } />} 
        </div>
    )
}

export default PokedexButton
