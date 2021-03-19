import { TestiPage, TestimonyHeader, TestimonyContent} from './TestimonyPage.styled'

import TestimonyGallery from './TestimonyModal'
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