import styled from 'styled-components'

import kbbq from '../pictures/kbbq.jpg'
const MenuContainer = styled.div`
display: flex;
flex-direction: column;
`

const MenuHeader = styled.div`
    background-image: url(${kbbq});
    background-repeat:no-repeat;
    background-size:cover;
    filter:grayscale(0.2);
    color:white;
    height: 0;
    font-size: 50px;
    display:flex;
    justify-content: center;
    padding:2em;
`

const MenuContent = styled.div`
    background: #F5F5F5;
    display:flex;
    flex-direction: column;
    justify-content:center;
    padding: 20px;
`

const MenuRow = styled.div`
    width:100%;   
    height:25em;
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding: 1em 0;
    `

const MenuBox = styled.div`
    width:35%;
    background:white;
    font-size: 16px;
    line-height: 1.5;
    padding: 10px;

`

const MenuBoxAlt = styled(MenuBox)`
    background:black;
    color:white;
`

const MenuPicture = styled.div`
    width:35%;
    background-image:url(${({ menuPic}) => `"${menuPic}"`});
    background-size:cover;
    background-repeat:no-repeat;
`

const MenuPictureParallax = styled.div`
    background-attachment: fixed;
    background-image:url(${({ menuPic}) => `"${menuPic}"`});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    height: 100%;
`

const MenuItem = styled.div`
    &::before {
        color: #D1B000;
        content:${({ menuItemTitle }) => menuItemTitle ? `"${menuItemTitle}"` : ""};
    }

`

const ComboHeader = styled.div`
    font-weight:bold;
    font-size:16px;
    color: white;
`

export { MenuContainer, MenuHeader, MenuContent, MenuRow, MenuBox, MenuBoxAlt, MenuPicture, MenuPictureParallax, MenuItem, ComboHeader }