import React from 'react'
import Modal from './Modal';

const WelcomeModal = ({ onClose }) => {

  return (
    <Modal className="bg-linear-15 border-4 from-yellow-300 via-yellow-400 to-black rounded-lg p-8 max-w-md mx-4 flex flex-col animate-fade-in-down">
      <h2 className="text-2xl font-bold mb-4">Welcome to Bvbdle!</h2>
      <p className="mb-4">Guess the final score, scorers and lineup for Borussia Dortmund's matches.</p>
      <p className="mb-4">Do you remember all the players?</p>
      <button className="mt-4 px-4 py-2 bg-black text-yellow-500 rounded cursor-pointer self-end" onClick={onClose}>Start Guessing!</button>
    </Modal>
  )
}

export default WelcomeModal
