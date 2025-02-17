export const blankProjectLoad = () => {

    console.log("Called blankProjectLoad Module ... creating blank project array now");
    let projectArray = [];
    console.log("Pushing the title name of project to projectArray ...");   
    let projectTitle = "Default Project";
    projectArray.push({projectTitle});
    console.log(projectArray);
    return { projectArray, projectTitle };

}