import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancelProject }) {
  const modal = useRef();
  const title = useRef();
  const descripion = useRef();
  const DueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = descripion.current.value;
    const enteredDueDate = DueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      DueDate: enteredDueDate,
    });
  };
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl text-center font-bold text-stone-500 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-400 mb-4 text-center">
          Oops... looks like you forgot to enter a valid value
        </p>
        <p className="text-stone-400 mb-4 text-center">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={descripion} label="Description" textarea />
          <Input type="date" ref={DueDate} label="Due Date" />
        </div>
        <menu className="flex items-center justify-end gap-4 my-8">
          <li>
            <button
              onClick={onCancelProject}
              className="text-stone-500 hover:text-stone-900"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="rounded px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}
