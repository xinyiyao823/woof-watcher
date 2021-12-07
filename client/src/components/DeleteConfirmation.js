import React from 'react'
import styled from 'styled-components'

function DeleteConfirmation({ modal, setModal, toggleModal, handleClick}) {
    // const [modal, setModal] = useState(false);
  
    // const toggleModal = () => {
    //   setModal(!modal);
    // };
  
    // if(modal) {
    //   document.body.classList.add('active-modal')
    // } else {
    //   document.body.classList.remove('active-modal')
    // }
  
    return (
      <>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <p>
                Are you sure you want to cancel this appointment?
              </p>
              <Button onClick={handleClick}>
                Yes, Delete
              </Button>
              <Button onClick={() => setModal(false)}>Nevermind, keep it</Button>
            </div>
          </div>
        )}
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
