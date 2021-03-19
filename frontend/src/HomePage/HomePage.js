import { useState } from 'react'

import Modal from '../Integrations/Modal'
import LogoSlogan from './LogoSlogan'
import Container1 from './Container_1'
import Container2 from './Container_2'
import Container3 from './Container_3'
import Container4 from './Container_4'
import Container5 from './Container_5'
import Container6 from './Container_6'

import { HomePagePics, HomePageCaptions }  from '../pictures/HomePagePics'
import './HomePage.css'

export default function HomePage() {

//pictures imported
const pictures = HomePagePics;

//display modal
const [modalDisplay, changeModalOpen] = useState(false)

//changing currently displayed polaroid on page and in modal
const [display,toDisplay] = useState(0)
const changeDisplay = (number) => {
    if(number > 0) {
        if(display === pictures.length - 1) toDisplay(0)
        else toDisplay(display + 1)
    } 
    else {
        if(display === 0) toDisplay(pictures.length - 1)
        else toDisplay(display - 1)
    }
}
    return (
        <div className = "HomePage">
            <Modal pictures = {HomePagePics} captions = {HomePageCaptions} modalDisplay = {modalDisplay} changeModalOpen = {changeModalOpen}
            changeDisplay = {changeDisplay} display = {display}
            />
            <LogoSlogan/>
            <div className = "HomePageContainer">
                <div className = "HomePageContainerContent">
                    <Container1/>
                </div>
                <div className = "HomePageContainerContent">
                    <Container2 pictures = {HomePagePics} captions = {HomePageCaptions} 
                    changeModalOpen = {changeModalOpen} changeDisplay = {changeDisplay} display = {display}
                    />
                </div>
            </div>
            <div className = "HomePageContainer">
                <div className = "HomePageContainerContent">
                    <Container3/>
                </div>
                <div className = "HomePageContainerContent">
                    <Container4/>
                </div>    
            </div>
            <div className = "HomePageContainer">
                <div className = "HomePageContainerContent">
                    <Container5/>
                </div>
                <div className = "HomePageContainerContent">
                    <Container6/>
                </div>    
            </div>
        </div>
    )
}