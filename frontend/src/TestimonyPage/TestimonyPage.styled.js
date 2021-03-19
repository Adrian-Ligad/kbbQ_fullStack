import styled from 'styled-components'

const TestiPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height:47em;
    background: #white;
`
const TestimonyHeader = styled.div`
    height:7em;
    text-decoration: underline;
    color:black;
    font-size:50px;
    font-weight: 700;
    font-style: italic;
    display:flex;
    justify-content: center;
    align-items: center;
`

const TestimonyContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height:100%;
`

const TestiGallery = styled.div`
    width: 90%;
    padding: 20px;
`

const TestiSubmission = styled.div`
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #E8E8E8;
    align-items: center;
`
const TestiSubmissionHeader = styled.div`
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
`
const TestiSubmissionContent = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

`

const TestiSubmissionColumn = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    height: 20em;
    width: 100%;
    border: 1px solid black;
    margin: 0 2px; 
`
const TestiSubmissionRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const TestiInput = styled.textarea`
    width: 50%;
    height: 1em;
    padding: 10px;
    margin: 10px;
    overflow: hidden;
    &:focus {
        border: 1px solid;
        outline-color: #EEE8AA;
    }
`

const TestiSubmit = styled.button`
    display: flex;
    outline: none;
    justify-content: center;
    font-weight: bold;
    width: 20%;
    background-color: white;
    color: black;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);
    text-decoration: none;
    &:hover {
        transition: 0.1s ease-in;
        background-color: #EEE8AA;
    }
    &:active {
        transition: 0.05s linear;
        box-shadow: 0 1px #666;
        transform: translateY(1px);

    }
`

export {
    TestiPage, TestimonyHeader, TestimonyContent, TestiSubmission, TestiGallery, TestiSubmissionHeader, TestiSubmissionContent,
    TestiSubmissionColumn, TestiSubmissionRow, TestiInput, TestiSubmit
       }