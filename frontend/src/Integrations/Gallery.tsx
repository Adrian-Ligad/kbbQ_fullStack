import { LeftArrow, RightArrow, GalleryContainer, PolaroidContainer, PolaroidImage, Caption } from './Gallery.styled'

type Props = {
    pictures: string[];
    captions: string[];
    changeModalOpen: (boolean: boolean) => void;
    changeDisplay: (number: number) => void;
    display: number;
}

const Gallery:React.FC<Props> = ({ pictures, captions, changeModalOpen, changeDisplay, display }) => {
 
    return (
        <GalleryContainer>
            <LeftArrow onClick = {() => changeDisplay(-1)}/>
            <PolaroidContainer onClick = {() => changeModalOpen(true)}>
                <PolaroidImage>
                    <img src = {pictures[display]} alt = {`Image ${display}`} 
                    width ="200px" height = "200px"></img>
                    <Caption>
                        {captions[display]}
                    </Caption>
                </PolaroidImage>
            </PolaroidContainer>
            <RightArrow onClick = {() => changeDisplay(1)}/>
        </GalleryContainer>
    )
}

export default Gallery