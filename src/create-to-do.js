//Creating an array for ToDo, if needed down the road
let toDoArray = [];

//Factory function to create ToDo List
export const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    console.log("Called createToDo Module ... creating ToDo now");
    console.log({Title, Description, DueDate, Priority, CheckList});
    console.log("Pushing this object to toDoArray ...");
    //TODO: remove below two lines of code if array is not needed
    toDoArray.push({Title, Description, DueDate, Priority, CheckList});
    console.log(toDoArray);
    return { Title, Description, DueDate, Priority, CheckList };

}
