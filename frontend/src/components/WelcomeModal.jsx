import { useRef, useEffect } from 'react'
import Modal from './Modal';

const WelcomeModal = () => {
  const dialog = useRef();

  useEffect(() => {
    dialog.current.open();
  }, []);

  return (
    <Modal ref={dialog}>
      <div className="w-96 h-48 bg-gray-800 text-white rounded-md p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to BVBDLE!</h2>
        <p className="mb-4">Guess the Borussia Dortmund squad for the upcoming match. You have 13 guesses to identify the players. Good luck!</p>
        <button onClick={() => dialog.current.close()} className="px-4 py-2 bg-yellow-500 text-black rounded cursor-pointer">Start Guessing</button>
      </div>
    </Modal>
  )
}

export default WelcomeModal
