import React from 'react'
import { Link } from 'react-router-dom'
import { LogoPic } from './Header.styled'
//types
type Props = {
    closeMenu:() => void;
}
const Logo:React.FC<Props> = ({ closeMenu }) => {
    return (
        <Link to = "/"  onClick = {() => closeMenu()}> 
            <LogoPic>   
            </LogoPic>
        </Link>
    )
}

export default Logo