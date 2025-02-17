(() => {
    "use strict";
    const o = () => {
        console.log("Called blankProjectLoad Module ... creating blank project array now");
        let o = [];
        console.log("Pushing the title name of project to projectArray ...");
        let e = "Default Project";
        return o.push({ projectTitle: e }), console.log(o), { projectArray: o, projectTitle: e };
    };
    let e = [];
    const t = (o, t, n, r, c) => (
        console.log("Called createToDo Module ... creating ToDo now"),
        console.log({ Title: o, Description: t, DueDate: n, Priority: r, CheckList: c }),
        console.log("Pushing this object to toDoArray ..."),
        e.push({ Title: o, Description: t, DueDate: n, Priority: r, CheckList: c }),
        console.log(e),
        { Title: o, Description: t, DueDate: n, Priority: r, CheckList: c }
    );
    o();
    document.addEventListener('DOMContentLoaded', function() {
        const e = document.querySelector(".content"),
            t = document.createElement("h1");
        t.textContent = "To Do List", e.appendChild(t);
        const n = document.createElement("div");
        n.textContent = o().projectTitle, e.appendChild(n);
    });
    const n = t("Grocery Run", "Go get groceries", "6/15/2025", "Low", "Milk, Eggs, Bread"),
        r = t("Homework", "Do Odin Project Work", "6/20/2025", "Medium", "Do ToDo List Project");
    console.log("Show me properties on myToDo from index.js ....", n),
    console.log("Show me properties on myToDo2 from index.js ....", r);
})();