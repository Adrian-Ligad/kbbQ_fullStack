import { TestiPage, TestimonyHeader, TestimonyContent} from './TestimonyPage.styled'
import { useReducer } from 'react'
import TestimonyGallery from './TestimonyGallery'
import TestimonySubmission from './TestimonySubmission'

export default function TestimonyPage() {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    function handleClick() {
        console.log("click")
      forceUpdate();
    }
    return (
        <TestiPage>
            <TestimonyHeader>
                Reviews
            </TestimonyHeader>
            <TestimonyContent>
                <TestimonyGallery/>
                <TestimonySubmission handleClick = {handleClick}/>
            </TestimonyContent>
        </TestiPage>
    )
}