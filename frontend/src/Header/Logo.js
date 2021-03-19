import { Link } from 'react-router-dom'
import { LogoPic } from './Header.styled'

export default function Logo({ closeMenu }) {
    return (
        <Link to = "/"  onClick = {() => closeMenu()}> 
            <LogoPic>   
            </LogoPic>
        </Link>
    )
}