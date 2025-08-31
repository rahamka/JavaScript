let inputAccess = document.querySelector("input");
let taskList = document.querySelector(".task-list"); // ✅ get the task list container
let count = 1;

inputAccess.addEventListener("keydown", (event) => {
  // Qno why we entered here keydown event?
  if (event.key === "Enter") {
    let inputValue = inputAccess.value.trim();
    if (inputValue === "") return; // what is the meaning of this line of code?

    // parent container for task
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task"); // ✅ matches CSS

    // Task label
    let div = document.createElement("div");
    div.innerText = `Task ${count}: ${inputValue}`;
    count++;

    // Delete button
    let btn = document.createElement("button");
    btn.innerText = "Delete Task";
    btn.addEventListener("click", () => {
      taskContainer.remove();
    });

    // append inside taskContainer
    taskContainer.append(div, btn);

    // ✅ append task inside .task-list (not body)
    taskList.append(taskContainer);

    inputAccess.value = ""; // clear input
  }
});
