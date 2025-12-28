import React from 'react'

const Marker = ({ team, children }) => {
  return (
    <div
        className={`
          lg:size-8 md:size-7 size-5 text-xs lg:text-md md:text-sm rounded-full flex items-center justify-center font-bold
          ${team === 'home' ? 'bg-linear-to-t from-gray-700 via-gray-900 to-black' : 'bg-linear-to-t from-yellow-300 via-yellow-300 to-yellow-400'}
          ${team === 'home' ? 'text-white' : 'text-black'}
          border-2 border-white shadow-lg cursor-pointer
          group-hover:scale-110 transition-transform duration-200
        `}
      >
        {children}
      </div>
  )
}

export default Marker
