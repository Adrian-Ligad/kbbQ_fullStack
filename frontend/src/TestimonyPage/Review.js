import { TestiReview } from './TestimonyPage.styled'

export default function Reviews({ review }) {
    return (
        <TestiReview>
            <div>
                {review.name}
            </div>
            <div>
                {review.rating}
            </div>
            <div>
                {review.message}
            </div>
        </TestiReview>
    )
}