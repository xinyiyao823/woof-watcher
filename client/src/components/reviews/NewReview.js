import React, {useState} from 'react'
import { MdOutlineAddComment } from 'react-icons/md'
import SitterRating from '../SitterRating'
import styled from 'styled-components'


function NewReview({addNewReview, user, sitter_id, value, setValue}) {
    const [newReview, setNewReview] = useState("");
    const [reviewButton, setReviewButton] = useState(false)

    const newReviewObj = {
        review: newReview,
        sitter_id: sitter_id,
        user_id: user.id
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/sitters/${sitter_id}/reviews`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReviewObj)
        })
        .then(r => r.json())
        .then(review => 
            addNewReview(review)
        )
        
        setNewReview("")
        setReviewButton(!reviewButton)
    }
    return (
        <div>
            <h1 onClick={() => setReviewButton(!reviewButton)}> <MdOutlineAddComment /> </h1>
             {reviewButton ? (
                 <form 
                 onSubmit={handleSubmit} 
                 >
             <h4>Leave a rating & review!</h4>
                <Input
                    id="review"
                    value={newReview}
                    // placeholder="comment:"
                    onChange={(e) => setNewReview(e.target.value)}
                    className="addReview"
                />
                <SitterRating value={value} setValue={setValue} />
            </form>) : null }
        </div>
    )
}

export default NewReview

const Input = styled.input`
    margin-top: none;
    padding: 5px;
    border-radius: 30px;
    border: 1px solid;
`
