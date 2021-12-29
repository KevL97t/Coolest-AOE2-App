import React from 'react'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import './MainMenu.css'
import { useState } from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import MainMenuContent from '../MainMenuContent/MainMenuContent'

const MainMenu = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(true);
    }

    const handleCloseMenu = () => {
        setOpenMenu(false);
    }

    return (
        <div className='main-menu-main-container'>
            <div className='main-menu-icon-container'>
            {openMenu 
            ? 
                <AiOutlineCloseSquare onClick={handleCloseMenu}  className='main-menu-icon-close'/> 
            :
                <AiOutlineMenuUnfold onClick={handleOpenMenu} className='main-menu-icon'/>
            }
            {openMenu && <MainMenuContent />}
            </div>
        </div>
    )
}

export default MainMenu
