import React from 'react'

function Review({review, user}) {
    return (
        <div>
            {`${user.name} - ${review}`}
        </div>
    )
}

export default Review
