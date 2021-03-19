import { Link } from 'react-router-dom'

import kbbq6 from '../pictures/kbbq6.jpg'
import spottedBackground from '../pictures/spottedbackground.jpg'

const spotBack = `"url(${spottedBackground})"`
export default function Container_3() {
    return(
        <div className = "ContentContainer">
            <div className = "Container50">
                <img src = {kbbq6} alt = "firefighter Danny" width = "500" height = "320"></img>
            </div>
            <div className = "Container50-alt">
                <Link className = "HomeButton alt" to = "/contact">Contact</Link>
            </div>
        </div>
    )
}