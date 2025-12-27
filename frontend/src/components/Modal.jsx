import React, { useRef, useEffect, useImperativeHandle } from 'react'
import { createPortal} from 'react-dom';

const Modal = ({ ref, children }) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
    close: () => {
      dialog.current.close();
    }
  }));

  return createPortal(
    <dialog ref={dialog} className="w-1/4 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg backdrop:bg-black/50 outline-none">
      <div className='flex flex-col justify-center items-center self-center'>
        {children}
      </div>
    </dialog>,
    document.getElementById('modal')
  )
}

export default Modal
