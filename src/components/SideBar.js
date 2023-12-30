import { useContext, useState } from "react";
import { ProjectContext } from "../store/project-context";

function SideBar(props) {

    const projectContext = useContext(ProjectContext)

    // const [projects, setProjects] = useState(props.projectList);

    function addProject() {
        console.log("adding project..")
        const newProject = {
            name: "project name " + (projectContext.projects.length + 1),

            createDate: "Dec 9 2024",
            description: "dummy project descrioption",
            tasks: [
                {
                    name: "task name " + (projectContext.projects.length + 1),
                    description: "dummy task description"
                }
            ]
        }
        projectContext.addProject(newProject);
    }

    return (
        <div className="flex-column">
            <div className="add-project">
                <button type="button" className="text-capitalize" onClick={addProject}>add project</button>
            </div>
            <div className="flex-column">
                {projectContext.projects.map((project) => {
                    return (
                        <div key={project.id}>
                            <button onClick={(event) => props.onSelectProject(event.target.value)}
                                    value={project.id}>{project.name}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SideBar;