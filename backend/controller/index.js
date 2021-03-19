import { Review } from '../model/index.js'

export const postReview = async (name, rating, message) => {
    let date = new Date()
    const review = await Review.create({name : name, rating : rating, message: message, date : date})
    return `Review ${review.id} created succesfully!`
}

export const getReviews = async() => {
    const reviews = await Review.findAll()
    return reviews
}