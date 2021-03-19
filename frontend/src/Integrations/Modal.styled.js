import styled from 'styled-components'

const ModalContainer = styled.div`
    display: ${({ modalDisplay }) => !modalDisplay ? "none" : "block"};
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100vh; /* Full height */
    overflow: hidden; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
    overflow-y: hidden;
    padding-right: 15px; /* Avoid width reflow */
`
const ModalContent = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    background-color: black;
    margin: 10% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 90%; /* Could be more or less, depending on screen size */
    align-items:center;
`
const CloseButton = styled.span`
    position:absolute;
    top:70vh;
    left: 170vh;
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    transition: color 0.2s ease-in;
    &:hover {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`

export { ModalContainer, ModalContent, CloseButton }