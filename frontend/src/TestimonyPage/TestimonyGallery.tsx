import { useState, useEffect } from 'react';
import { TestiGalleryContainer, TestiGallery, TestiReviewsContainer } from './TestimonyPage.styled'
import { LeftArrow, RightArrow } from '../Integrations/Gallery.styled'
import axios from 'axios'
//components
import Review from './Review'
//types
import { ReviewType } from '../types.d'

const TestimonyGallery:React.FC = () => {
    const [ reviews, setReviews ] = useState<ReviewType[]>([])
    const [ index, setIndex ] = useState<number>(0)

    useEffect(() => {
        axios.get('http://localhost:3001/reviews')
        .then(({ data }) => setReviews(data))
    }, [])

    function changeIndex(direction: string) {
        if( direction === "left") {
            if(index === 0) return
            setIndex( index - 5)
        }
        else {
            if ( index + 5 > reviews.length) return
            setIndex(index + 5)
        }
    }

    return(
        <TestiGalleryContainer>
        <div>{Math.floor((index / 5)) + 1}</div>
        <TestiGallery>
                <div>
                    <LeftArrow backgroundColor = "white" border = "black" onClick = {() => changeIndex("left")}/>
                </div>
                <TestiReviewsContainer>
                    {reviews.slice(index, index + 5).map(review => <Review key = {review.id} review = {review}/>)}
                </TestiReviewsContainer>
                <div>
                    <RightArrow backgroundColor = "white" border = "black" onClick = {() => changeIndex("right")}/>
                </div>
        </TestiGallery>
        </TestiGalleryContainer>
    )
}

export default TestimonyGallery