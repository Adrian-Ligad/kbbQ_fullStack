import { Link } from 'react-router-dom'

import kbbq2 from '../pictures/kbbq2.jpg'

const Container6:React.FC = () => {
    return(
        <div className = "ContentContainer">
            <div className = "Parallax Container50">
                <Link className = "HomeButton" to = "/reviews">Reviews</Link>
            </div>
            <div className = "Container50">
            <img src = {kbbq2} alt = "firefighter Danny" width = "400" height = "320"></img>
            </div>
        </div>
    )
}

export default Container6