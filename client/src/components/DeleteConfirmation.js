import React from 'react'
import styled from 'styled-components'

function DeleteConfirmation({ modal, setModal, toggleModal, handleClick}) {
    
    return (
      <>
        {modal && (
          <div className="delete-modal">
            <div onClick={toggleModal} className="overlay"></div>
              <div className="delete-modal-content">
                <p>
                  Are you sure you want to cancel this appointment?
                </p>
                <Button onClick={handleClick}>
                  Yes, Cancel
                </Button>
                {/* <Button onClick={() => setModal(false)}>Nevermind, keep it</Button> */}
              </div>
          </div>
          )
        }
      </>
  );
}
export default DeleteConfirmation

const Button = styled.button`
    margin: 15px;
    border-radius: 30px;
    border: none;
    font-color: white;
    padding: 10px;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
    font-size: 15px;
    background-color: maroon;
`
