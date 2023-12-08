import './App.css';
import { useState } from "react";
import SideBar from "./components/SideBar";
import Project from "./components/Project";
import { dummyProjects } from "./models/dummy-projects";
import { ProjectContext } from "./store/project-context";

function App() {

    const [projects, setProjects] = useState(dummyProjects);
    const [selectedProject, setSelectedProject] = useState();

    function addProject(newProject) {
        newProject.id = projects.length + 1;
        console.log("new project: " + newProject.id);
        setProjects([
            ...projects,
            newProject
        ])
    }

    function removeProject(id) {
        console.log("removing project id: " + id);
        const updatedProjects = projects.filter(project => project.id != id);
        setProjects(updatedProjects);
    }

    function showProject(id) {
        console.log("looking for project id: " + id);
        const foundProject = projects.find(project => project.id == id);
        console.log("found project: " + foundProject.id);
        setSelectedProject(foundProject);
    }

    const projectContextValue = {
        projects: projects,
        addProject: addProject,
        removeProject: removeProject
    }
    return (
        <ProjectContext.Provider value={projectContextValue}>
            <div className="flex-row">
                <SideBar onSelectProject={showProject}></SideBar>
                {selectedProject && <Project project={selectedProject}></Project>}
                {!selectedProject && <div>create a project first!</div>}
            </div>
        </ProjectContext.Provider>

    );
}

export default App;
