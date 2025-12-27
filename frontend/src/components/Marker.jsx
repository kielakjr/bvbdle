import React from 'react'

const Marker = ({ team, children }) => {
  return (
    <div
        className={`
          w-8 h-8 rounded-full flex items-center justify-center font-bold text-white
          ${team === 'home' ? 'bg-blue-500' : 'bg-red-500'}
          border-2 border-white shadow-lg cursor-pointer
          group-hover:scale-110 transition-transform duration-200
        `}
      >
        {children}
      </div>
  )
}

export default Marker
