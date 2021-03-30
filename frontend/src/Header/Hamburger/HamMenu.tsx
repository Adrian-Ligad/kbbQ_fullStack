import React from 'react'
import { Link } from 'react-router-dom'

import { StyledMenu }  from './StyledMenu.styled'
//types
type Props = {
    isOpen:boolean;
    closeMenu:() => void;
    scroll: number;

}
const HamMenu:React.FC<Props> = ({ isOpen, closeMenu, scroll }) => {
    return(
            <StyledMenu open = {isOpen} scroll = {scroll}>
                <Link to = "/" onClick = {() => closeMenu()}>Home</Link>
                <Link to = "/menu" onClick = {() => closeMenu()}>Menu</Link>
                <Link to = "/about" onClick = {() => closeMenu()}>About</Link>
                <Link to = "/contact" onClick = {() => closeMenu()}>Contact Us</Link>
                <Link to = "/reviews" onClick = {() => closeMenu()}>Reviews</Link>
            </StyledMenu>
    )
}

export default HamMenu