import Gallery from '../Integrations/Gallery'

export default function Container_2({ pictures, captions, changeModalOpen, changeDisplay, display }) {
    return(
        <div className = "ContentContainer">
            <Gallery pictures = {pictures} captions = {captions} 
            changeModalOpen = {changeModalOpen} changeDisplay = {changeDisplay} display = {display}/>      
        </div>
    )
}