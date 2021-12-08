import React from 'react'
import Review from './Review'
import styled from 'styled-components'

function ReviewList({reviews, showReviews}) {
    
    
    return (
        showReviews ? 
        (<div>
            {reviews.map(review => <Review review={review.review}/>)}
        </div>) : null
    )
}

export default ReviewList


