import { createToDo } from "./create-to-do";
import { blankProjectLoad } from "./blank-projeect-load";
import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm, displayToDo } from "./initial-dom-manip";
import './style.css';

// Call blankProjectLoad on first land
//blankProjectLoad();

// Call Dom Manipulation module to control UI
displayDefaultProject();

// Click events module
let clickEventsModule = (function() {

    // Click event for displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    // Click event for adding an item to the checklist on the form
    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToCheckList);

    // Click event to clear the form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

    // Click event to submit a new todo form to project
    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo);
    
})();