import { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [enterTasks, setEnterTasks] = useState("");

  const handleChange = (e) => {
    setEnterTasks(e.target.value);
  };

  const handleClick = () => {
    if (enterTasks.trim() !== "") {
      onAdd(enterTasks);
      setEnterTasks("");
    } else {
      alert("Enter something to proceed");
    }
  };

  return (
    <div className="flex items-center gap-4">
      <input
        value={enterTasks}
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg:stone-500"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:tet-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
