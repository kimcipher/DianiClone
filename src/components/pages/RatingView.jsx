import React, {useState} from 'react'
import "./css/rating.css"
import { Rating } from 'react-simple-star-rating'

function RatingView() {
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
        console.log(rate)
    }
  return (
    <>
    <div className="rating-main">
        <h3>Give us Feedback</h3>
        <form>
            <input type="text" placeholder="text"/>
            <input type="text" placeholder="text"/>
            <textarea type="text" placeholder="text">

            </textarea> 
            <div>
            <Rating onClick={handleRating} ratingValue={rating} showTooltip/>
            </div>
            <input type="submit" id="submitbtn"/>
        </form>
    </div>
    </>
  )
}

export default RatingView