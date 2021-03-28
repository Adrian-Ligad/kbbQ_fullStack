import { TestiPage, TestimonyHeader, TestimonyContent} from './TestimonyPage.styled'
import TestimonyGallery from './TestimonyGallery'
import TestimonySubmission from './TestimonySubmission'

const TestimonyPage:React.FC = () => {
    return (
        <TestiPage>
            <TestimonyHeader>
                Reviews
            </TestimonyHeader>
            <TestimonyContent>
                <TestimonyGallery/>
                <TestimonySubmission />
            </TestimonyContent>
        </TestiPage>
    )
}

export default TestimonyPage