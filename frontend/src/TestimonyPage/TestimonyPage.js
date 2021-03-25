import { TestiPage, TestimonyHeader, TestimonyContent} from './TestimonyPage.styled'

import TestimonyGallery from './TestimonyGallery'
import TestimonySubmission from './TestimonySubmission'

export default function TestimonyPage() {
    return (
        <TestiPage>
            <TestimonyHeader>
                Reviews
            </TestimonyHeader>
            <TestimonyContent>
                <TestimonyGallery/>
                <TestimonySubmission/>
            </TestimonyContent>
        </TestiPage>
    )
}