import React, { useState, useEffect } from 'react'
import ReviewList from './ReviewList'
import NewReview from './NewReview'
import styled from 'styled-components'

function ReviewInterface({sitter_id, user, value, setValue}) {
    const [reviews, setReviews] = useState([]);
    const [showReviews, setShowReviews] = useState(false)
    
    useEffect(() => {
        fetch(`/sitters/${sitter_id}/reviews`)
        .then(r => r.json())
        .then(reviews => setReviews(reviews))
    }, []);

    const addNewReview = (review) => {
        setReviews([...reviews, review])

    }
    return (
        <div>
            <Button onClick={() => setShowReviews(!showReviews)}>See Reviews</Button>
            <ReviewList reviews={reviews} showReviews={showReviews}/>
            <NewReview addNewReview={addNewReview} sitter_id={sitter_id} user={user} reviews={reviews} value={value} setValue={setValue} />
        </div>
    )
}

export default ReviewInterface

const Button = styled.button`
    margin: 15px;
    padding: 10px;
    border-radius: 30px;
    border: none;
    font-size: 15px;
    font-color: white;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
`
