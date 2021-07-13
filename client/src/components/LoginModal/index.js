import React from "react";
import Modal from 'react-modal';

// required to meet accesibility standards
Modal.setAppElement('#root');

export default function LoginModal({ isOpen, closeModal }) {
  //console.log(props.isOpen)
  // make zindex greater than that of BottomIcon

  return (
      <div>
        <Modal
          isOpen={isOpen}
        >
          <h2>Login</h2>
          <form>
            <h4>Username</h4>
            <input/>
            <h4>Password</h4>
            <input/>
          </form>
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
  )
}