import React from 'react'
import './MainMenuContent.css'


const MainMenuContent = () => {
    return (
        <div className='main-menu-content-main-container'>
                <ul className='main-menu-list'>
                    <li className='main-menu-list__item'><a target='_blank' href="https://github.com/KevL97t/coolest-aoe2-app">About this project</a></li>
                    <li className='main-menu-list__item'><a target='_blank' href="https://github.com/KevL97t">About the creator</a></li>
                    <li className='main-menu-list__item'><a target='_blank' href="https://pokeapi.co/">More about PokeApi</a></li>
                </ul>
        </div>
    )
}

export default MainMenuContent
