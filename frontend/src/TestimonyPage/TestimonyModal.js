import { useState, useEffect } from 'react';
import { TestiGallery } from './TestimonyPage.styled'
import axios from 'axios'
import Review from './Review'

export default  function TestimonyGallery() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/reviews')
        .then(({ data }) => setReviews(data))
    }, [])

    return(
        <TestiGallery>
                {reviews.map(review => <Review review = {review}/>)}
        </TestiGallery>
    )
}