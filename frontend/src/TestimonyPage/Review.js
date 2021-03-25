export default function Reviews({ review }) {
    console.log(review)
    return (
        <div>
            <div>
                {review.name}
            </div>
            <div>
                {review.rating}
            </div>
            <div>
                {review.message}
            </div>
        </div>
    )
}