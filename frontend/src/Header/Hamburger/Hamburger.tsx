import {Squash as Hamburger} from 'hamburger-react'

import { HamburgerHolder } from '../Header.styled'
//props
type Props = {
    isOpen: boolean;
    setOpen:(boolean: boolean) => void;
}

const Ham:React.FC<Props> =({ isOpen, setOpen }) => {

    return (
        <HamburgerHolder>
            <Hamburger size = {20}  duration={ 0.2 } toggled={isOpen} toggle={()=> setOpen } distance="lg" 
                onToggle = {toggled => {if(toggled){setOpen(true)} else{setOpen(false)}}}
                color = "white"
            >
            </Hamburger>
        </HamburgerHolder>
    )
}

export default Ham