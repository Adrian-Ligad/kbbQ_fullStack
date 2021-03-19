import {Squash as Hamburger} from 'hamburger-react'

import { HamburgerHolder } from '../Header.styled'


export default function Ham ({ isOpen, setOpen }) {

    return (
        <HamburgerHolder>
            <Hamburger className = "Hamburger" size = "20"  duration={ 0.2 } toggled={isOpen} toggle={ setOpen } distance="lg" 
                onToggle = {toggled => {if(toggled){setOpen(true)} else{setOpen(false)}}}
                color = "white"
            >
            </Hamburger>
        </HamburgerHolder>
    )
}