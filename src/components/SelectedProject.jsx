// import Modal from "./Modal";
// import { useRef } from "react";

// export default function SelectedProject({ project, onDeleteProject }) {
//   const formattedDate = new Date(project.DueDate).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });

//   const modal = useRef();

//   if (onDeleteProject) {
//     modal.current.open();
//     return;
//   }

//   return (
//     <>
//       <Modal ref={modal} buttonCaption="Yes">
//         <h2 className="text-xl text-center font-bold text-stone-500 my-4">
//           Are you sure you want to delete?
//         </h2>
//       </Modal>
//       <div className="w-[35rem] mt-16">
//         <header className="pb-4 mb-4 border-b-2 border-stone-300 ">
//           <div className="flex items-center justify-between">
//             <h1 className="text-3xl font-bold text-stone-600">
//               {project.title}
//             </h1>
//             <button
//               onClick={onDeleteProject}
//               className="text-stone-600 hover:text-stone-950"
//             >
//               Delete
//             </button>
//           </div>
//           <p className="mb-4 text-stone-400">{formattedDate}</p>
//           <p className="text-stone-600 whitespace-pre-wrap">
//             {project.description}
//           </p>
//         </header>
//       </div>
//     </>
//   );
// }

import { useRef, useState } from "react";
import Modal from "./Modal";
import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const formattedDate = new Date(project.DueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleDeleteClick = () => {
    setIsModalOpen(true);
    modalRef.current.open();
  };

  const handleConfirmDelete = () => {
    onDeleteProject();
    setIsModalOpen(false);
  };

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300 ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
          <button
            onClick={handleDeleteClick}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      {isModalOpen && (
        <Modal ref={modalRef} buttonCaption="No">
          <div className="text-center">
            <p>Are you sure you want to delete this project?</p>
            <div className="flex justify-around mt-4">
              <button
                onClick={handleConfirmDelete}
                className="px-6 py-2 mb-5 bg-red-600 text-white rounded hover:bg-red-800"
              >
                Yes
              </button>
            </div>
          </div>
        </Modal>
      )}
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
