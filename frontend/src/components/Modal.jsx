import React from 'react'

const Modal = ({ children, ...props}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div {...props}>
        {children}
      </div>
    </div>
  )
}

export default Modal
