import React, { useState, useEffect } from 'react'
import ReviewList from './ReviewList'
import NewReview from './NewReview'

function ReviewInterface({sitter_id}) {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`/sitters/${sitter_id}/reviews`)
        .then(r => r.json())
        .then(reviews => setReviews(reviews))
    }, []);

    console.log(reviews)
    return (
        <div>
            <ReviewList reviews={reviews}/>
            <NewReview />
        </div>
    )
}

export default ReviewInterface
