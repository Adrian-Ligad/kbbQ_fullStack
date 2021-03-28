import { useState } from 'react'
import axios from 'axios'
import { TestiSubmission, TestiSubmissionHeader, TestiSubmissionContent, TestiSubmissionColumn, TestiSubmissionRow, TestiInput, TestiSubmit } from './TestimonyPage.styled'
import RatingStars from './Rating'

const serverSite = 'http://localhost:3001/reviews'

const TestimonySubmission:React.FC = () => {
    const [ rating, ratingChanged ] = useState<number>(0);
    const [ fName, changeFName ] = useState<string>("")
    const [ lName, changeLName ] = useState<string>("")
    const [ review, changeReview ] = useState<string>("")

    function submitReview() {
        if( fName.length < 1 || lName.length < 1 || rating === 0 || review.length < 1) alert("Fill out all the inputs to submit!")
        else {
            axios.post(serverSite, {
                fName,
                lName,
                rating,
                message: review
            })
            .then(val => {
                console.log(val.data)
            })
            .catch(err => console.log(err)) 
        }
    }

    return(
        <TestiSubmission>
            <TestiSubmissionHeader>
            Want your opinion to be shared? Submit your reviews here!
            </TestiSubmissionHeader>
            <TestiSubmissionContent>
                <form style = {{width: "100%"}}>
                    <TestiSubmissionColumn>
                        <TestiSubmissionRow>
                            <TestiInput type = "text" id = "fname" name = "fname" placeholder = "First Name" value = {fName} 
                            onChange = {( event ) => changeFName(event.target.value)} required 
                            />
                            <TestiInput type = "text" id = "lname" name = "lname" placeholder = "Last Name" value = {lName} 
                            onChange = {( event ) => changeLName(event.target.value)} required
                            />
                        </TestiSubmissionRow>
                        <TestiSubmissionRow>
                            <RatingStars ratingChanged = {ratingChanged}
                            />
                        </TestiSubmissionRow>
                        <TestiSubmissionRow>
                            <TestiInput type = "text" id = "review" name = "review" placeholder = "Fill me in!" value = {review}
                                style = {{height: "12em", width: "95%"}}  
                                onChange = {( event ) => changeReview(event.target.value)} required
                            />
                        </TestiSubmissionRow>
                    </TestiSubmissionColumn>
                </form>
            </TestiSubmissionContent>
            <TestiSubmit onClick = {() => submitReview()}>
                Submit
            </TestiSubmit>
        </TestiSubmission>
    )
}

export default TestimonySubmission