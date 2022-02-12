const taskList = document.querySelector("ul#task_list");
const dateInput = document.querySelector("input#duedate_input")
const taskInput = document.querySelector("input#task_description_input")
const timeInput = document.querySelector("input#duetime_input")
const addButton = document.querySelector("button#add_task")

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}

function addTask(description, dueTime=false) {
    const li = document.createElement('li');
    const dateTime = new Date(dueTime);
    const dateTimeSpan = dueTime ? `<span class="due">due ${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}</span>` : "";
    const task = `${description}${dateTimeSpan}<button class="btn btn-sm btn-outline-danger done" type="button">Done</button>`
    li.innerHTML = task;
    taskList.appendChild(li);
}

addButton.addEventListener("click", () => {
    console.log("Added task!");
    addTask(taskInput.value, dateAndTimeToTimestamp(dateInput, timeInput));
    taskInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
});

document.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        console.log("Added task!");
        addTask(taskInput.value, dateAndTimeToTimestamp(dateInput, timeInput));
        taskInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
    }
});

taskList.addEventListener("click", (e) => {
    if(e.target.classList.contains("done")) {
        e.path[1].remove();
    };
})

/* generating random tasks */
addTask("Submit CV", Date.now() + Math.floor((Math.random() * Math.pow(10, 9) + Math.pow(10, 8))));
addTask("Mock interview", Date.now() + Math.floor((Math.random() * Math.pow(10, 9) + Math.pow(10, 8))));
addTask("Get rejected");