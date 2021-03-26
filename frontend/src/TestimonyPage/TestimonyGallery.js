import { useState, useEffect } from 'react';
import { TestiGallery, TestiReviewsContainer } from './TestimonyPage.styled'
import { LeftArrow, RightArrow } from '../Integrations/Gallery.styled'
import axios from 'axios'
import Review from './Review'

export default  function TestimonyGallery() {
    const [ reviews, setReviews ] = useState([])
    const [ index, setIndex ] = useState(0)

    useEffect(() => {
        axios.get('http://localhost:3001/reviews')
        .then(({ data }) => setReviews(data))
    }, [])

    function changeIndex(direction) {
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
    )
}