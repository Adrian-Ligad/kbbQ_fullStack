import { useState } from 'react'

import { TestiSubmission, TestiSubmissionHeader, TestiSubmissionContent, TestiSubmissionColumn, TestiSubmissionRow, TestiInput, TestiSubmit } from './TestimonyPage.styled'
import RatingStars from './Rating'

export default function TestimonySubmission() {
    const [ rating, ratingChanged ] = useState(0);
    const [ fName, changeFName ] = useState("")
    const [ lName, changeLName ] = useState("")
    const [ review, changeReview ] = useState("")
    

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
            <TestiSubmit>
                Submit
            </TestiSubmit>
        </TestiSubmission>
    )
}