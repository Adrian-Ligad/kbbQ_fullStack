import styled from 'styled-components'

const GalleryContainer = styled.div`
    background:black;
    display: flex;
    flex-direction: row;
    width:100%;
    height:100%;
    align-items: center;
    justify-content: space-around;
`

//Arrow stylings
const arrow = styled.button`
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 40px;
    background-color: black;
    outline: none;
    cursor: pointer;
    transition: .15s ease-in-out;
    &:hover {
        border:solid #A38A00;    
        border-width: 0 3px 3px 0;
      }
    &:active {
        border:solid gray;    
        border-width: 0 3px 3px 0;
    }
` 
const changeDirection = styled.div`
    height:auto;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
`

const LeftArrow = styled(arrow)`
    ${changeDirection}
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);

`

const RightArrow = styled(arrow)`
    ${changeDirection}
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`
//polaroid stylings
const PolaroidContainer = styled.div`
    position: relative;
    background-color: lightgrey;
    height: 270px;
    width:230px;
`

const PolaroidImage = styled.div`
    position: relative;
    height:200px;
    border: 1px solid black;
    background-color: white;
    padding: 10px 15px 60px 15px;
    box-shadow: 5px 5px 10px darkgrey;
    transition: all 0.3s ease-in;
    &:hover {
        cursor: pointer;
        transform:scale(1.15);
    }
`
const Caption = styled.div`
    text-align:center;
`
export { GalleryContainer, LeftArrow, RightArrow, PolaroidImage, PolaroidContainer, Caption }