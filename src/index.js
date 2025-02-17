import { blankProjectLoad } from "./blank-projeect-load";
import { initialdomManip } from "./initial-dom-manip";
import { createToDo } from "./create-to-do";


//Call blankProjectLoad on first land
blankProjectLoad();

//Call Dom Manipulation module to control UI
initialdomManip();

//TODO: click event module here for todo and project creations

//Call create-to-do.js module file and apply some objects/properties
const myToDo = createToDo("Grocery Run", "Go get groceries", "6/15/2025", "Low", "Milk, Eggs, Bread");
const myToDo2 = createToDo("Homework", "Do Odin Project Work", "6/20/2025", "Medium", "Do ToDo List Project");
console.log("Show me properties on myToDo from index.js ....", myToDo);
console.log("Show me properties on myToDo2 from index.js ....", myToDo2);