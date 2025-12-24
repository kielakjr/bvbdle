import React from 'react'

const Pitch = ({ children }) => {
  return (
    <div className="relative w-96 h-128 bg-green-600 border-4 border-white rounded-lg shadow-lg">
      {children}
    </div>
  )
}

export default Pitch
