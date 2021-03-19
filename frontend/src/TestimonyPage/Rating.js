import ReactStars from "react-rating-stars-component";


export default function RatingStars( {ratingChanged} ) {
    return (
        <ReactStars
        count = {5}
        size = {40}
        onChange = {ratingChanged}
        isHalf = {true}
        emptyIcon = {<i className="far fa-star"></i>}
        halfIcon = {<i className="fa fa-star-half-alt"></i>}
        fullIcon = {<i className="fa fa-star"></i>}
        activeColor = "#EEE8AA"
      />
    )
}