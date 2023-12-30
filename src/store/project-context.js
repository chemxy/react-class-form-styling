import { createContext } from "react";
import { dummyProjects } from "../models/dummy-projects";


export const ProjectContext = createContext({
    projects: dummyProjects,
    addProject: () => {
    },
    removeProject: () => {
    }
});
