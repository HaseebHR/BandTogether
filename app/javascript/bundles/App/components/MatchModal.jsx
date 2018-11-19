
import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const MatchModal = props => {
  return (
    <Modal isOpen={props.open} toggle={props.toggle}>
      <ModalHeader className="match-pop-top" toggle={props.toggle}>Congratulations!</ModalHeader>
      <ModalBody>
        <p> You have Matched with {props.user.name}!</p>
        <p> Send them a message to get things started! </p>
        <p> {props.user.phone}</p>
      </ModalBody>
      <ModalFooter>
        <button className="btn" onClick={(e) => { props.toggleModal(), props.handleDislike() }}>Cancel</button>
      </ModalFooter>
    </Modal>
  )
}

export default MatchModal
