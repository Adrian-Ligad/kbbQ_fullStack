import { TestiReview } from './TestimonyPage.styled'
//types
import { ReviewType } from '../types.d'
import React from 'react'

type Props = {
    review: ReviewType
}

const Reviews:React.FC<Props> = ({ review }) => {
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

export default Reviews