import { useRef } from 'react'
//utilities
import {useOnClickOutside as closeModal} from '../Header/Hamburger/hooks'
//styles
import {LeftArrow, RightArrow } from './Gallery.styled'
import { ModalContainer, ModalContent, CloseButton } from './Modal.styled'
//types
type Props = {
    modalDisplay: boolean;
    display: number;
    changeDisplay: any;
    changeModalOpen: (boolean:boolean) => void
    pictures: string[];
}

const Modal:React.FC<Props> = ({ modalDisplay, display,changeDisplay, changeModalOpen, pictures }) => {

//for closing modal when open
    const modalRef = useRef()
    closeModal(modalRef,() => {
        return changeModalOpen(false)
    })

    return(
        <ModalContainer modalDisplay = {modalDisplay}>
            <ModalContent ref = {modalRef}>
                <LeftArrow onClick = {() => changeDisplay(-1)}/>
                <img src = {pictures[display]} alt = {`Image ${display}`} 
                    width ="600px" height = "400px"></img>
                <RightArrow onClick = {() => changeDisplay(1)}/>
                <CloseButton onClick = {()=> changeModalOpen(false)}>Close</CloseButton>
            </ModalContent>
        </ModalContainer>
    )   
}

export default Modal