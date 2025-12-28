import { useRef, useImperativeHandle } from 'react'
import { createPortal} from 'react-dom';

const Modal = ({ ref, children }) => {
  const dialog = useRef();

  let classes = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/50 outline-none rounded-lg"

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
    close: () => {
      dialog.current.close();
    }
  }));

  return createPortal(
    <dialog ref={dialog} className={classes}>
      {children}
    </dialog>,
    document.getElementById('modal')
  )
}

export default Modal
