import { useContext } from "react";
import { ProjectContext } from "../store/project-context";

export default function Project(props) {

    const projectContext = useContext(ProjectContext)

    return (<>
        <div>
            <h1>selected project:</h1>
            <div> project id: {props.project.id}</div>
            <div> project name: {props.project.name}</div>
            <div> project createDate: {props.project.createDate}</div>
            <div> project description: {props.project.description}</div>
            <div>
                <button className="text-capitalize"
                        onClick={() => projectContext.removeProject(props.project.id)}>delete project
                </button>
            </div>
        </div>
    </>);
}

