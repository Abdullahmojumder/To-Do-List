import { blankProjectLoad } from "./blank-projeect-load";

export function initialdomManip(){

    //DOM for Heading
    const contentDiv = document.getElementById("content");
    const heading = document.createElement("h1");
    heading.textContent = "To Do List";
    contentDiv.appendChild(heading);

    //DOM for Default Project Load
    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}