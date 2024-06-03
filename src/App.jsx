import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [selected, isSelected] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    isSelected((prevSelection) => {
      const newTask = {
        text: text,
        projectId: prevSelection.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...prevSelection,
        tasks: [...prevSelection.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (Id) => {
    isSelected((prevSelection) => {
      return {
        ...prevSelection,
        tasks: prevSelection.tasks.filter((task) => task.id !== Id),
      };
    });
  };

  const handleProjectDeletion = () => {
    isSelected((prevSelection) => {
      return {
        ...prevSelection,
        selectedProjectId: undefined,
        projects: prevSelection.projects.filter(
          (project) => project.id !== prevSelection.selectedProjectId,
        ),
      };
    });
  };

  const handleSelectProject = (id) => {
    isSelected((prevSelection) => {
      return {
        ...prevSelection,
        selectedProjectId: id,
      };
    });
  };

  const handleSelection = () => {
    isSelected((prevSelection) => {
      return {
        ...prevSelection,
        selectedProjectId: null,
      };
    });
  };

  function handleCancelAddProject() {
    isSelected((prevSelection) => {
      return {
        ...prevSelection,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    isSelected((prevSelection) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevSelection,
        selectedProjectId: undefined,
        projects: [...prevSelection.projects, newProject],
      };
    });
  }

  const selectedProject = selected.projects.find(
    (project) => project.id === selected.selectedProjectId,
  );
  let content = (
    <SelectedProject
      onDeleteProject={handleProjectDeletion}
      project={selectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selected.tasks}
    />
  );
  if (selected.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancelProject={handleCancelAddProject}
      />
    );
  } else if (selected.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleSelection} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onSelectProject={handleSelectProject}
        onAddProject={handleSelection}
        projects={selected.projects}
        selectedProjectId={selected.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
