import { Link } from 'react-router-dom'

const Container1: React.FC = () => {
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

export default Container1