import React from 'react'
import Review from './Review'


function ReviewList({reviews, showReviews, user}) {
    
    
    return (
        showReviews ? 
        (<div>
            {reviews.map(review => <Review user={user} review={review.review}/>)}
        </div>) : null
    )
}

export default ReviewList


