import React, { useState } from 'react'

function DeleteConfirmation() {
    const [delTask, setDelTask] = useState(false)

/* if delTask is false, change the display properties of our 
 * two elements and change delTask to true, so that next time 
 * the function is called, the elements are hidden again
 */

const handleConfirmationBox = () => {
  if (!delTask) {
    document.querySelector(".confirm-bg").style.display = "flex"
    document.querySelector(".container").style.display = "flex"
    setDelTask(true)
  } else {
    document.querySelector(".confirm-bg").style.display = "none"
    document.querySelector(".container").style.display = "none"
    setDelTask(false)
}
}

    return (
      <>
        <div className="container">
            <div className="confirmation-text">
                 Do you really want to delete this task?
            </div>
            <div className="button-container">
                <button 
                className="cancel-button" 
                onClick={() => handleConfirmationBox()}>
                 Cancel
                </button>
                <button 
                className="confirmation-button"
                >
                Delete
                </button>
            </div>
         </div>
        
      </>

    )

 }
export default DeleteConfirmation
