import React from 'react'
import Review from './Review'
import styled from 'styled-components'

function ReviewList({reviews, showReviews}) {
    
    
    return (
        showReviews ? 
        (<Div>
            {reviews.map(review => <Review review={review.review}/>)}
        </Div>) : null
    )
}

export default ReviewList

const Div = styled.div`
    div:hover {
        height: 300px;
    }
    transition: all 0.5s ease-in
`
