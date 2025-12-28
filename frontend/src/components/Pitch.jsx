import React from 'react'

const Pitch = ({ children }) => {
  return (
    <div className="relative aspect-7/10 lg:w-7/10 md:w-12/10 w-16/10 border-4 border-white rounded-lg shadow-lg bg-gradient-to-tl from-emerald-500 to-lime-600">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-12 h-12 border-4 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 left-1/3 w-0.5 h-20 bg-white"></div>
      <div className="absolute top-0 right-1/3 w-0.5 h-20 bg-white"></div>
      <div className="absolute bottom-0 left-1/3 w-0.5 h-20 bg-white"></div>
      <div className="absolute bottom-0 right-1/3 w-0.5 h-20 bg-white"></div>
      <div className="absolute top-20 left-1/3 w-1/3 h-0.5 bg-white"></div>
      <div className="absolute bottom-20 left-1/3 w-1/3 h-0.5 bg-white"></div>
      {children}
    </div>
  )
}

export default Pitch
