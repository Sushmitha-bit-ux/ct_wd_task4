const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskDue = document.getElementById("task-due");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value;
  const dueDate = taskDue.value;

  if (!taskText || !dueDate) return;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");
  taskInfo.innerHTML = `<strong>${taskText}</strong><div class="task-date">Due: ${new Date(dueDate).toLocaleString()}</div>`;

  li.appendChild(checkbox);
  li.appendChild(taskInfo);

  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
  });

  taskList.appendChild(li);

  // Reset form
  taskInput.value = "";
  taskDue.value = "";
});
