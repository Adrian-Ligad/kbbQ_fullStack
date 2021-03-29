import Gallery from '../Integrations/Gallery'

type Props = {
    pictures: string[];
    captions: string[];
    changeModalOpen: (boolean: boolean) => void;
    changeDisplay: (number: number) => void;
    display: number;
}

const Container2:React.FC<Props> = ({ pictures, captions, changeModalOpen, changeDisplay, display }) => {
    return(
        <div className = "ContentContainer">
            <Gallery pictures = {pictures} captions = {captions} 
            changeModalOpen = {changeModalOpen} changeDisplay = {changeDisplay} display = {display}/>      
        </div>
    )
}

export default Container2