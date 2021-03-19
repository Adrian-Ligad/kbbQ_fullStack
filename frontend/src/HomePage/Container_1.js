import { Link } from 'react-router-dom'

export default function Container1() {
    return (
        <div className = "ContentContainer">
            <div className = "Parallax kbbq9"/>
            <div className = "Parallax Container25">
                <Link className = "HomeButton" to = "/about">About</Link>
            </div>
            <div className = "Parallax Container25-alt">
                <Link className = "HomeButton alt" to = "/menu">Menu</Link>
            </div>
        </div>
    )
}