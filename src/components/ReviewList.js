import React, {useState, useEffect} from 'react'
import { Review } from './Review'
import { ReviewForm } from './ReviewForm'
import { getReviews } from '../serviceAPI/reviewsService'

export default function ReviewList() {
  const [reviews, setReviews] = useState([])
    useEffect(() => {
      getReviews().then(setReviews)
  }, [])

  function handleAdd(review) {
      setReviews(e => [...e, review])
  }

  return (
    <div className="reviewList">
        <div>
          <ReviewForm onSubmit={handleAdd}/>
          {/* maps new reviews with it's props and displays them  */}
          {reviews.map(({id, name, location, reviewText}) => (
              <Review 
              key={id}
              id={id}
              name={name}
              location={location}
              reviewText={reviewText}
              />
          ))}
        </div>
    </div>
  )
}

