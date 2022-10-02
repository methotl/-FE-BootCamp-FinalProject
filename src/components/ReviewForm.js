import React, { useState } from 'react';
import { createReview } from '../serviceAPI/reviewsService';
import Button from 'react-bootstrap/Button';

export function ReviewForm({ onCancel, review}) {

  const id = review && review.id ? review.id : undefined

  const [name, setName] = useState(id ? review.name : '')
  const [location, setLocation] = useState(id ? review.location : '')
  const [reviewText, setReviewText] = useState(id ? review.reviewText : '')

  function handleSubmit(e) {
      e.preventDefault()
      createReview( { name, location,reviewText, id}).then(review => {
          clearForm()
      })
  }

  function clearForm() {
      setName('')
      setLocation('')
      setReviewText('')
      onCancel && typeof onCancel === 'function' && onCancel()
  }
//functions to handle changing of each input
  function handleNameChange(e) {
      const { value } = e.target
      setName(value)
  }

  function handleLocationChange(e) {
      const{ value } = e.target
      setLocation(value)
  }

  function handleReviewTextChange(e) {
    const{ value } = e.target
    setReviewText(value)
  }
//input form for review, no update or delete options
  return(
    <form className="reviewform" onReset={clearForm} onSubmit={handleSubmit}>
      <h2>Let Us Know What You Think!</h2>
      <h3>Name</h3>
      <input 
        type="text"
        placeholder="Please Enter Your Name"
        id={id}
        value={name}
        onChange={handleNameChange}
      />
      <h3>Location</h3>
      <input
        type="text"
        placeholder="Location"
        id={id}
        value={location}
        onChange={handleLocationChange}
      />
      <h3>Review</h3>
      <textarea
        placeholder="What did you think?"
        id={id}
        name="review"
        value={reviewText}
        onChange={handleReviewTextChange}
      />
      <div>
        <Button variant="success"className="reviewSubmit" type="submit">Submit</Button>
        <Button variant="warning"className="reviewCancel"type="reset">Cancel</Button>
      </div>
    </form>
  )
}
