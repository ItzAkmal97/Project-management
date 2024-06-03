// import { createPortal } from "react-dom";
// import { forwardRef, useImperativeHandle, useRef } from "react";

// const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
//   const dialog = useRef();
//   useImperativeHandle(ref, () => {
//     return {
//       open() {
//         dialog.current.showModal();
//       },
//     };
//   });
//   return createPortal(
//     <dialog
//       className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
//       ref={dialog}
//     >
//       {children}
//       <form className="flex justify-center" method="dialog">
//         <button className="flex rounded px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">
//           {buttonCaption}
//         </button>
//       </form>
//     </dialog>,
//     document.getElementById("modal-root"),
//   );
// });

// export default Modal;

import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={dialog}
    >
      {children}
      <form className="flex justify-center" method="dialog">
        <button
          className="flex rounded px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={() => dialog.current.close()}
        >
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
