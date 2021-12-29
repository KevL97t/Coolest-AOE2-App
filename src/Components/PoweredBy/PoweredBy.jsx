import React from 'react'
import './PoweredBy.css'


const PoweredBy = () => {
    return (
        <footer className='poweredby-maincontainer'>
            <div className='poweredby-text-container'>
                <p className='poweredby-text'>Powered By</p>
            </div>
            <div className='poweredby-logo-container'>
                <img className='poweredby-logo' src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokeapi-logo" />
            </div>
        </footer>
    )
}

export default PoweredBy
