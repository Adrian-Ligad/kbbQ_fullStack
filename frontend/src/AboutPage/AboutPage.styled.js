import styled from 'styled-components'

import SteveHotty from '../pictures/SteveHotty.jpg'

const AboutPageWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const AboutPageStory = styled.div`
    background-image: url('${SteveHotty}');
    background-attachment: fixed;
    background-position: center;
    background-color: gray; 
    height:800px;
    width:100%;
`

const AboutPageStoryContent = styled(AboutPageWrapper)`
    color:white;
    border-radius: 100px;
    text-align:center;
    margin-top:20%;
    margin-left:20%;
    padding: 50px;
    font-size: 50px;
    width:50%;
    transition: opacity .2s ease-in;
    opacity:${({ scroll }) => scroll < 20 ? "0.8" : "0" };
`

const AboutPageArrowDown = styled(AboutPageStoryContent)`
    margin-top:5%;
    padding:1em 1em;
    flex-direction:row;
    justify-content: space-between;
`

// For description
const AboutPageDescription = styled.div`
    width:100%;
    height:70em;
    background: #F5F5F5;
    display:flex;
    flex-direction:column;
    align-items:center;

`
const DescriptionCatcher = styled.div`
    margin:2em 0;
    padding:2em 0;   
    width:40%; 
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    font-style: oblique;
    letter-spacing:5px;
    font-size:30px;
    color:#A38A00;
`

const DescriptionContent = styled.div`
    font-family: "Times New Roman", Times, serif;
    width:40%;
    letter-spacing:2px;
    font-size:18px;
    color:black;
`

export { 
    AboutPageWrapper, AboutPageStory, AboutPageStoryContent, AboutPageArrowDown, 
    AboutPageDescription, DescriptionCatcher, DescriptionContent 
}