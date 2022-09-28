import React, {useState} from 'react';
import "./css/rating.css";
import { Rating } from 'react-simple-star-rating';
import {useForm, ValidationError} from '@formspree/react';
import "./css/stars.css";

function RatingView() {
    const [state, handleSubmit] = useForm("mwkzodbv");
    const [yourRate, setYourRate] = useState(0)
    console.log(yourRate);
    const Stars = () => {
      return(
       <>
        <ul class="rate-area">
          <input type="radio" id="5-star" name="rating" value="5" onClick={() => (setYourRate(5))} /><label for="5-star" title="Amazing">5 stars</label>
          <input type="radio" id="4-star" name="rating" value="4" onClick={() => (setYourRate(4))} /><label for="4-star" title="Good">4 stars</label>
          <input type="radio" id="3-star" name="rating" value="3" onClick={() => (setYourRate(3))} /><label for="3-star" title="Average">3 stars</label>
          <input type="radio" id="2-star" name="rating" value="2" onClick={() => (setYourRate(2))} /><label for="2-star" title="Not Good">2 stars</label>
          <input type="radio" id="1-star" name="rating" value="1" onClick={() => (setYourRate(1))} /><label for="1-star" title="Bad">1 star</label>
        </ul>
       </>
      )
    }
    if (state.succeeded) {
      return (
        <p>Thanks for giving us a review</p>
      )
    }
  return (
    <>
    <div className="rating-main">
        <h3>Give us Feedback</h3>
        <form>
            <input type="email" id="email" placeholder="email"/>
            <input type="text" placeholder="Number"/>
            <textarea type="text" placeholder="text">

            </textarea> 
            <div className="star-container">
              <Stars/>
            </div>
            <input type="submit" id="submitbtn"/>
        </form>
    </div>
    </>
  )
}

export default RatingView