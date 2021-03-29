import React from 'react'
import Danny from '../pictures/DannyBuscemi.jpg'

const LogoSlogan:React.FC = () => {
    return (
            <div className = "LogoSlogancontainer">
                    <img className = "DannyImage" src = {Danny} alt = "DannyBuscemi"></img>
                    <div className = "LogoSloganContent">
                       <div>Danny Buscem's KBBQ</div>
                       <div className = "Header2">Classic Venue with Modern Style<br/>EST. 2021</div>
                        
                    </div>   
            </div>
    )
}

export default LogoSlogan